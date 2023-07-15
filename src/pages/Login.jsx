import React from 'react'
import { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth"
import { Link,useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

const Login = () => {
    const [err,setErr]=useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e) =>{
        e.preventDefault()
        
        const email = e.target[0].value
        const password = e.target[1].value
        

try{
    await signInWithEmailAndPassword(auth,email,password)
    navigate("/")



}catch(err){
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
            <span className="title">Login</span>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='Your Password'/>               
                <button>Sign In</button>
                {<span>SomeThing Went Wrong</span> && err }
            </form>
            <p>You don't have an account?<Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login