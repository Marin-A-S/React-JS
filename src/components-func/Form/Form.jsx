import style from './Form.module.css';
import { useState, useEffect } from 'react';

export const Form = ({ arr, changeMessageList }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [quantity, setQuantity] = useState(null);

  const handleClick = () => {
    if (author !== '' && text !== '') {
      setIsTyping(false);

      changeMessageList([
        ...arr,
        {
          text: text,
          author: author,
        },
      ]);
    } else {
      alert('Enter text please!');
    }
  };

  const authorChange = (event) => {
    setIsTyping(true);
    setAuthor(event.target.value);
  };

  const textChange = (event) => {
    setText(event.target.value);
  };

  const handleClickInfo = () => {
    let user = arr.find((element) => element.author === author);
    let counter = 0;
    if (user) {
      arr.forEach((element) => {
        if (author === element.author) {
          counter = counter + 1;
        }
      });
    }
    setQuantity(counter);
  };

  useEffect(() => {
    if (isTyping) {
      return;
    }
    setTimeout(() => {
      alert('Got a new message from ' + author + '!');
    }, 1500);
  }, [author, isTyping]);

  return (
    <div className={style.card}>
      <h3 className={style.title}>App component (parent)</h3>
      <p className={style.title}>Author:</p>
      <input
        className={style.field}
        type="text"
        onChange={authorChange}
        placeholder="Author's name"
      ></input>
      <p className={style.title}>Message:</p>
      <input
        className={style.field}
        type="text"
        onChange={textChange}
        placeholder="Text message"
      ></input>
      <button className={style.button} onClick={handleClick}>
        Send
      </button>
      <div className={style.infowrap}>
        <p>Author: {author}</p>
        <p className={style.infofield}>
          Total messages typed: {quantity}{' '}
          <button className={style.button} onClick={handleClickInfo}>
            Info
          </button>
        </p>
      </div>
    </div>
  );
};