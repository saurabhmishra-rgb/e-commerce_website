import React from 'react'
import './Login.css'
import { assets } from '../../assets/assets';

const Login = ({ setShowLogin }) => {   
  const [currentState, setCurrentState] = React.useState("Login");

  return (
    <div className='Login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img 
            onClick={() => setShowLogin(false)} 
            src={assets.cross_icon} 
            alt="" 
          />
        </div>
        <div className="login-popup-inputs">
               {currentState==="Login"? <></> :<input type="text" placeholder='Your name' required />}
               <input type='email' placeholder='Your email' required />
               <input type="password" placeholder='Your password' required />
        </div>
        <button>{currentState === "Sign Up" ? "Create Account" : "Login"}

        </button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
        </div>
            {currentState==="Login"?<p>Create a new account? <span onClick={()=>setCurrentState("Sign up")}>Click here</span></p> 
            : <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
      </form>
    </div>
  )
}

export default Login
