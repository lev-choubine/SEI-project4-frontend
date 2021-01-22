
import Axios from 'axios'
import React, { useEffect, useState } from "react";
import useChat from "./chat/useChat";
import Sort from './Sort'
import ImageUpload from './ImageUpload'
import Image from './Image'
import Others from './Others'
import Response from './Response'
import Chat from './chat/Chat'
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
  const [reload, setReload] = useState(true)


  


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


  console.log(info);
  // const information = info && info.length ? info : ''
  return (
    <div>
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
                <div>{message.body}</div> :
                <div id="chatBox">
                  <img className="profilePic" src={message.image}/>
                   <p>{message.senderId} says:</p>
                   
               <p> {message.body}</p>
               
               {/* <p>{message.id}</p>  */}
               <p>{message.type}</p> 
               < Response room={message.id} name={props.user.name} id ={props.user.id} type={message.type} pic={info.image_url}/>
              
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
      <div id="profile">
      <Image email={props.user.email} pic={pic}/>
      <ImageUpload email={props.user.email} pic={setPic}/>
      <Others user={props.user} info={info}/>
      </div>
  
      <div id="home">
      <Sort user={account} me={props.user.name} id={props.user.id} pic={info.image_url} toggle={getRandomUser}/>
      </div>
    </div>
)};

export default Notifications;