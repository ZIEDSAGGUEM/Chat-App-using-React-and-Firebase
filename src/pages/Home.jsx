import React from 'react'
import SideBar from '../components/SideBar'
import '../style.scss'
import Search from '../components/Search'
import Chats from '../components/Chats'
import Navbar from '../components/Navbar'
import Chat from '../components/Chat'


const Home = () => {
  return (
    <div className='home'>
        <div className="container">
        <SideBar/>
        <Chat/>
               
                     
        </div>
    </div>
  )
}

export default Home