
import { ChatMessage } from './ChatMessage';
import { useAutoScroll } from "./useAutoScroll.jsx"
import './ChatMessages.css';


function ChatMessages({chatMessages}){

        // const chatMessagesRef = React.useRef(null);
        
        // React.useEffect(()=>{
        //   console.log('update');
        //   const chatMessageDom=chatMessagesRef.current;
        //   if (chatMessageDom){
        //     console.log(chatMessageDom.scrollHeight);
        //     chatMessageDom.scrollTop=chatMessageDom.scrollHeight;
        //     console.log(chatMessageDom.scrollTop);

        //     console.log(chatMessageDom);
        //   }
        // },[chatMessages]);
        const chatMessagesRef = useAutoScroll(chatMessages);

        return (
          <div 
          className="css-chatMessages"
          ref={chatMessagesRef}
          >
            {chatMessages.map((chatMessage)=>{
                return (
                  <ChatMessage 
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                  currentTime = {chatMessage.currentTime}
                 
                  />
                )


              })}
          </div>
        )

      }
export default ChatMessages;