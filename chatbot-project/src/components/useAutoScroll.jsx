import {useEffect, useRef } from 'react'

export function useAutoScroll(dependecies){
        const chatMessagesRef = useRef(null);
        
        useEffect(()=>{
          const chatMessageDom=chatMessagesRef.current;
          if (chatMessageDom){
            chatMessageDom.scrollTop=chatMessageDom.scrollHeight;
         
          }
        },[dependecies]);
        return(chatMessagesRef);
      }
