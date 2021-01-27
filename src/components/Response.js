import useChat from "./chat/useChat";
import Chat from "./chat/Chat"
import React, { useState, useEffect } from "react";
import axios from "axios";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Response (props){
    console.log(props)
    const roomId = props.room; 
    const user = props.name // Gets roomId from URL
    const id = props.id
    const type = "chat"
    const image = props.pic
 
    const { messages, sendMessage } = useChat(roomId, user, id, type, image ); // Creates a websocket and manages messaging
    const [newMessage, setNewMessage] = useState("Let's Chat");
 
    const handleSendMessage = () => {
     
        document.getElementById(`${props.room}`).style.display="block"
        document.getElementById(`${props.room+props.id}`).style.display="none"
        console.log(props.email);
        sendMessage(newMessage);
        setNewMessage(`${props.name} wants to chat`);
        props.reload("me")
        props.reload("you")
/////////////////////////////////////
const notificationData = {
    id: props.id,
    content: `${props.name} wants to chat`,
    date: Date.now(),
    my_id: props.room,
    type: 'chat',
    read: false,
    pic: props.pic,
    email: props.email,
    name: props.name
  }

  axios.post(`${REACT_APP_SERVER_URL}/api/users/notifications`, notificationData)
  .then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
//////////////////////////////////////////////////////////////////
};
    
    
    
    const handleChat =()=>{
        document.getElementById(`${props.room}`).style.display="block"
    }
 

   
    
   




    
  return (
       <div>
            
           {
            props.type==="chat" ?
       
              
                <div className="blue" id={props.room}>
                  
                     <Chat  room={props.room} me={props.name} id={props.id} type={"chat"} pic={props.pic} reload={props.reload} saveMessage={props.room} />
                     {/* <button onClick={handleChat}>Initiate Chat</button> */}
                </div>
              
                
               :
                <div>
                    <div className="chat" id={props.room}>
                        <Chat saveMessage={props.room} chat={handleChat} room={props.room+props.id} me={props.name} id={props.id} type={"chat"} pic={props.pic} reload={props.reload}/>
                    </div>
                    <button  id={props.room+props.id} onClick={handleSendMessage}>Chat</button>
                </div>

           }
           
            
       </div>
       
    )
}

export default Response;