
import Axios from 'axios'
import React, { useEffect, useState } from "react";
import useChat from "./chat/useChat";
import Sort from './Sort'
import ImageUpload from './ImageUpload'
import Image from './Image'
import Others from './Others'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Notifications = (props) => {
  console.log(props.user)
  const  { roomId } = props.match.params; 
  const user = props.user.name// Gets roomId from URL
  const { messages, sendMessage } = useChat(roomId, user); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = useState("");
  const [account, setAccount] = useState([]);
  const [pic, setPic] = useState(false);
  const [info, setInfo] = useState([]);

 
  


    // get random user
const getRandomUser = () => {
  if(!props.user.email){
    return
  }
      Axios.get(`${REACT_APP_SERVER_URL}/api/users/users/random`)
      .then(res => {
        
        setAccount(res.data.user)
        console.log(res.data.user);})
      .catch(err => {
        console.log(err);
  })
}

  
function getMyInfo (route){
  if(!props.user.email){
    return
  }
  Axios.get(route)
  .then(res =>{
    console.log(props.user.email)
    console.log(res.data)
    setInfo(res.data.user[0])
    console.log(info)
     
     })
  .catch(err=>{
      console.log(err)
  })

}


  
  useEffect(() => {
    getRandomUser()
    getMyInfo (`${REACT_APP_SERVER_URL}/api/users/myinfo/${props.user.email}`)
  }, [props.user.email])


  console.log(props.info);
  // const information = info && info.length ? info : ''
  return (
    <div>
      <Image email={props.user.email} pic={pic}/>
      <ImageUpload email={props.user.email} pic={setPic}/>
      <Others user={props.user} info={info}/>
      <div className="chat-room-container">
        <div className="messages-container">
          <div className="messages-list">
            {messages.map((message, i) => (
              <p
                key={i}
                className={`message-item ${
                  message.ownedByCurrentUser ? "my-message" : "received-message"
                }`}
              > 
                { props.user.id !== roomId ?
                <div></div> :
                <div>
               <p> Your profile was liked by</p>
               <p>{message.senderId}</p> 
               </div>
              }
              </p>
            ))}
          </div>
        </div>
        { props.user.id !== roomId 
        ?
         <div>
        {/* <textarea
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="Write message..."
          className="new-message-input-field"
        /> */}
        {/* <button onClick={handleSendMessage} className="send-message-button">
          Like
        </button>  */}
        </div> 
        : 
        <div></div>
        }
      </div>
      <Sort user={account} me={props.user.name} pic={props.user.image_url} />
    </div>
)};

export default Notifications;