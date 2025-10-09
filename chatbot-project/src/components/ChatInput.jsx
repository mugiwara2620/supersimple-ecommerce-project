import {useState} from 'react';
import {Chatbot} from 'supersimpledev';
import LoadingImage from  '../assets/ChatBot/loading-spinner.gif'
import './ChatInput.css';
import dayjs from 'dayjs';



export function ChatInput({chatMessages , setChatMessages}){
  



  const time = dayjs().valueOf();
  let currentTime= dayjs(time).format('h:mma');

        const [inputText, setInputText] = useState('');

        function saveInputText(event){
          setInputText(event.target.value);
        }
        function isLoading(){
          let n=chatMessages.length;


          if (n===0){
            return false;
          }
          else
          {
          let me = chatMessages[n-1].message || ' sd ';
          if (me===LoadingImage){
           return true;
          }
        }
        }
        async function sendMessage(){
          
          
          // let newChatMessages = [...chatMessages];
          setChatMessages(
            [...chatMessages,{
              message:inputText,
              sender:'user',
              currentTime : currentTime,
              id: crypto.randomUUID()
            },{
              message: <div> <img className='loading-img' src={LoadingImage} /> </div>,
              sender:'robot',
              currentTime : currentTime,
              id: crypto.randomUUID()}]
            ) ;
          //  await isLoading();
         const response = await Chatbot.getResponseAsync(inputText);
         
          setChatMessages(
            [...chatMessages,{
              message:inputText,
              sender:'user',
              currentTime:currentTime,
              id: crypto.randomUUID()
            },{
              message:response ,
              sender:'robot',
              currentTime:currentTime,
              id: crypto.randomUUID()}]
            ) ;
          
          
          

          setInputText('');
          
          }
        function keyboardEnter(event){
          let key = event.key;
          if (key==="Enter"){
            if(isLoading()===true || inputText===''){
            console.log('loading');
            }else{
            sendMessage();
            
            };
            setInputText('');
                 
                  
                
              
          } else if(key==="Escape"){
            setInputText('');
          }
        };
        function ClearFunction(){
      setChatMessages([]);
         
              }
        


          return (
            <div className="css-input">
              <input 
                className="send-input"
                size="30" 
                placeholder="Send a message to ChatBot"
                onChange={saveInputText} 
                value={inputText}
                onKeyDown={keyboardEnter}
              />
              <button 
              className="send-button"
              onClick={
                ()=>{

                 if(isLoading()===true || inputText===''){
                  console.log('loading');
                  
                  
                 }else{
                  sendMessage();
                  
                 }
                 setInputText('');
                  
                
              }
              
            }
              >Send</button>
              <button 
              className='clear-button'
              onClick={  
                ClearFunction
                }
              >
                Clear
              </button>
              
            </div>
          )
      } 