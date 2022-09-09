import { useState } from 'react';

export const MessageFunc = (props) => {
  const [msg, setMessage] = useState('')
  const [messageItem, setMessageItem] = useState(props.messageList)
  const handleMessage = (event) => {
    setMessage(event.target.value) 
  }
  const addMessage = () => {
    setMessageItem([...messageItem, msg])
    setMessage("")
  }

  const allMessages = messageItem.map((msg, index) => {
    return <span key={index}>{msg} </span>
  })
  return (
    <>
      <div style = {{
        backgroundColor: 'Orange',
        fontSize: '20px'
        }}>
        <div style = {{fontWeight: 'bold'}}>Class props message:</div>
        <div>{props.messageList}</div>
      </div>
      <hr/>
      <div style={{backgroundColor: 'Teal'}}>
        <input value={msg} onChange={handleMessage}/>
        <button onClick={addMessage}>Send</button>
      </div>
      <div style={{backgroundColor: 'LightGreen'}}>{allMessages}</div>
    </>
  );
};
