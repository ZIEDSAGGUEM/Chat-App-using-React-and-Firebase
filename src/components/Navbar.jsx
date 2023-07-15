import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

const Navbar = () => {
    const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbar'>
        <span className="logo">Chat_Now</span>
        <div className="user">
            <img src={currentUser.photoURL} alt="" srcset="" />
            <span>{currentUser.displayName}</span>
            <button onClick={()=>signOut(auth)}>Log Out</button>
        </div>
    </div>
  )
}

export default Navbar