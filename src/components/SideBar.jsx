import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chat from './Chat'
import '../style.scss'
import Chats from './Chats'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <Navbar/>
        <Search/>
        <Chats/>
        
    </div>
  )
}

export default SideBar