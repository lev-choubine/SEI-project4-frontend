import React, { useState } from 'react'
import Response from './Response';
import useChat from "./chat/useChat";

function Alerts (props) {  
    const user = props.user.name// Gets roomId from URL 
    const  { roomId } = props.match.params; 
    const { messages, sendMessage } = useChat(roomId, user); // Creates a websocket and manages messaging
    const [newMessage, setNewMessage] = useState("");
    props.messages(messages)
    return(
        <div>
                 <div className="chat-room-container" id="notify" >
      <div className="messages-container">
        <div className="messages-list">
          {messages.map((message, i) => (
           
            <p
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            > 
              { props.user.id === roomId ?
              
              <div >
                
                <div class="chatBox">
                <img className="profilePic" src={message.image}/>
                  <p>{message.senderId}</p>
              <p> {message.body}</p>
              
              
              </div>
              <div class="chatBox">
                <Response room={message.id} name={props.user.name} id ={props.user.id} email={props.account.email} type={message.type} pic={props.info.image_url}/>
                </div>
              </div> 
              : 
              <div></div>
              }
            </p>
          ))}
        </div>
      </div>
    
    </div> 
        </div>
    )
}

export default Alerts;