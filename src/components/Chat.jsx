import React from 'react'
import '../style.scss'
import Add from '../pages/images/add.png'
import Cam from '../pages/images/cam.jpg'
import More from '../pages/images/more.png'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'
import { useContext } from 'react'

const Chat = () => {
  const {data} = useContext(ChatContext)
  return (
    <div className='chat'>
        <div className="chatInfo">
            <span>{data.user?.displayName}</span>
            <div className="chatIcons">
                <img src={Add} alt="" srcset="" />
                <img style={{borderRadius:"50%"}} src={Cam} alt="" srcset="" />
                <img src={More} alt="" srcset="" />
            </div>
        </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat