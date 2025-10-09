import RobotProfileImage from '../assets/ChatBot/robot.png';
import UserProfileImage from '../assets/ChatBot/power-me.jpg';
import './ChatMessage.css'

export function ChatMessage({message, sender, currentTime}){

  
  // console.log(props);
  // const {sender}=props;
  // const {message}=props;

  // const {message, sender}=props;



  /*if (sender==='user'){
    const image="img/ChatBot/user.png";
    return(
    <div>
      {message}
      <img src={image} width="50" />
    </div>
    )
  }
    const image="img/ChatBot/robot.png";
    */
    
    return(
    <>
      {sender==='robot' && (
      <div className="css-message-text-robot">
        <div className="text-message">
          <div>
          <img 
          src={RobotProfileImage}
          className="chat-message-profile"
          />
          </div>
          <div className="css-message-text">
            <div>
              {message}
            </div>
            
            <div className='message-time'>
                {currentTime}
            </div>
          </div>
        </div>
      </div>
      )}
      
      
      {sender==='user'  && (
        <div className="css-message-text-user">
          <div className="text-message">
            <div className="css-message-text">
              
              <div>
                {message}
              </div>
              <div className='message-time'>
                {currentTime}
              </div>
              
              
            </div>
            <img 
            src={UserProfileImage} 
            className="chat-message-profile"
              />
          </div>
        </div>
      )}
      
    </>
    )

        }