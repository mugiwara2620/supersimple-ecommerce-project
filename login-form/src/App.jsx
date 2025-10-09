import { useState } from 'react'

import './App.css'

function App(){
        const [showPassword, setShowPassword]=useState(true);
        const [passwordText, setPasswordText]= useState('text');
        
        function isShowed(){
          setShowPassword(!showPassword);
          if(showPassword){
            setPasswordText('text');
          }else{
            setPasswordText('password')
          }
        }
        return(
          <div className="container">
            <p 
            className="hello-para"
            >
              Hello, welcome to my website
            </p>
            <div className="inputs-box">
              <input 
              className="email-input"
              placeholder="Email"/>
              
              {
                showPassword 
                ?
                <>
                  <input 
                  className="password-input"
                  placeholder="Password"
                  type={passwordText}/>
                  <button
                  className="show-password"
                  onClick={isShowed}
                  >
                    Show
                  </button>
                </>
                :
                <>
                  <input 
                  className="password-input"
                  placeholder="Password"
                  type={passwordText}/>
                  <button
                  className="hide-password"
                  onClick={isShowed}
                  
                  >
                  
                  Hide 
                  </button>
                </>
              }
              
            </div>
            
            <div className="buttoms-box">
              <button
              className="login-button"
              >Login
              </button>
              <button
              className="sing-up-button"
              >Sing up
              </button>
            </div>
          </div>
        )
      };





export default App
