import React from 'react'
import { useParams } from 'react-router-dom'

const Chat = () => {

  const {chatID}=useParams();

  console.log(chatID)
  return (
    <div>
      Chat
    </div>
  )
}

export default Chat
