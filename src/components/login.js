import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const login = ({login}) => {

  return (
  	<div className="full-container">

      <div className="auth-btn-container">
       <div className="welcome">welcome to<span className="title">FIRE CHAT !!!!</span></div>
       <div className="google-btn" onClick={login}>   
           <div className="google-logo"><FcGoogle size={20}/></div>
            <div className="google-text">Sign in with Google</div>
       </div>
       </div>
     </div>
  )
}

export default login;