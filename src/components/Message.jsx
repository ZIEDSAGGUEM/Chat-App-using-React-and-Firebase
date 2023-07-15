import React, { useContext, useState } from 'react'
import { ChatContext } from '../context/ChatContext'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'


const Message = ({message}) => {
  const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext)
  
  return (
    <div className={`message ${message.senderId === currentUser.uid && "owner"}`}>
        <div className="messageInfo">
            <img src={message.senderId===currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="" srcset="" />
            <span>Just Now</span>
        </div>
        <div className="messageContent">
            <p>{message.text} </p>
            {message.img && <img src={message.img}/>}
        </div>
    </div>
  )
}

export default Message