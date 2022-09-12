import React from 'react';
import { useState } from 'react';
import { Message } from './components-func/Message/Message';
import { Form } from './components-func/Form/Form';
import { MessageClass } from './components-class/Message';
import './index.css';


export const App = () => {
  const [messageList, setMessageList] = useState([]);

  return (
    <div className="App">
      <MessageClass messageList={['App_props_1 ', 'App_props_2 ', 'App_props_3 ']} />
      <Form arr={messageList} changeMessageList={setMessageList} />
      <Message data={messageList.length} />
      <div>
        <div>
          <u>Messages typed:</u>
        </div>
        {messageList.map((message, index) => (
          <div key={index}>
            {' '}
            {message.author}: {message.text}
          </div>
        ))}
      </div>
    </div>
  );
}
