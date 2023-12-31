import React from 'react'
import '../style.scss'
import { useState } from 'react';
import {createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth,db,storage } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

import Add from './images/114199.png'
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
const [err,setErr]=useState(false)
const navigate = useNavigate()
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].files[0]

try{
    const res = createUserWithEmailAndPassword(auth, email, password)


const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on(
  (error) => {
    setErr(true)
    // Handle unsuccessful uploads
  }, 
  () => {
    
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile((await res).user,{
        displayName ,photoURL:downloadURL
      })
      await setDoc(doc(db,"users",(await res).user.uid),{
        uid:(await res).user.uid,
        displayName,
        email,
        photoURL:downloadURL
    })
      await setDoc(doc(db,"userChats",(await res).user.uid),{
        
      })
      navigate("/")
    });
  }
);

    } catch(err){
        setErr(true)
    }
  

/*

.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });


*/
    }

  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Yoiur Name'/>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='Your Password'/>
                <input style={{display:"none"}} type='file' id='file'/>
                <label htmlFor='file'>
                <img style={{height:25,width:25,borderRadius:"50%",cursor:"pointer"}} src={Add} alt='Add Icon'/>
                <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You do have an account?<Link to="/login">Login</Link></p>
        </div>
        
      

    </div>
  )
}

export default Register