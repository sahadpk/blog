import React from 'react'
import "./Login.css"
import { auth,provider}from '../fireBase-config'
import {signInWithPopup}from 'firebase/auth'
import {useNavigate} from 'react-router-dom'




function Login({isAuth,setIsAuth}) {
   
   let navigate= useNavigate()


  const signInWithGoogle=()=>{
     signInWithPopup(auth,provider).then((result)=>{
        localStorage.setItem("isAuth",true);
       setIsAuth(true)
       navigate("/")
     })
  }

  return (
    <div className='loginpage'>
        <p>Sign In With Google</p>
        <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign In With google </button>
    </div>
  )
}

export default Login