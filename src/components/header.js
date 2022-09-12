import react from 'react'
import '../css/header.css'
function header({logout,user}){
   return(
     <>
       <div className="header">
          <div className="logo"><div>FIRE CHAT</div></div>
          <div className="nav">
             <div className="nav1" onClick={logout}>{user===null ? "": "Log out"}</div>
          </div>
       </div>
     </>
   )
}

export default header;