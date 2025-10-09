import { useEffect, useState} from 'react'
import  ChatMessages from  "./components/ChatMessages.jsx";
import { ChatInput } from "./components/ChatInput.jsx";
import {Chatbot} from 'supersimpledev';
import './App.css'


      


      
      
   
      


function App(){
 
        
        useEffect(()=>{
           Chatbot.addResponses({
          'goodbye': 'Goodbye. Have a great day!',
          'give me a unique id': function() {
           return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      }})})
    


            
       
        
       
        const [chatMessages, setChatMessages]=useState(
          JSON.parse(localStorage.getItem('chatMessages')) || []
        );
        useEffect(()=>{
      localStorage.setItem('chatMessages',JSON.stringify(chatMessages));
    },[chatMessages])
    ;
    //  let b=true;
    // useEffect(()=>{
    //                 localStorage.clear();
    //               },[b]);
    

        
        
        

        

        // const [chatMessages, setChatMessages] = array;
        // const chatMessages=array[0] ;
        // const setChatMessages =array[1];
        return (
          <div 
          className="css-App"
          
          
          >
            <ChatMessages
            chatMessages={chatMessages} 
            />
            
            { (chatMessages.length ===0) &&
            <div className='welcome'>
              Welcome to the chatbot project! Send a message using the textbox below.
            </div> 
            }
            <ChatInput 
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
            
            
            />
            
            
            
          </div>
        )
      }
      

export default App
