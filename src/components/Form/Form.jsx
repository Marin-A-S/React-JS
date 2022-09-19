import { useState } from "react";
import style from "./Form.module.css";

export const Form = ({ addMessage }) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addMessage({
      author: 'USER',
      text,
    });
    setText('');
  }

  return (
    <form className={style.card} onSubmit={handleSubmit}>
      <h3 className={style.title}>Form</h3>
      <input className={style.field} type="text" value={author} onChange={(event) => setAuthor(event.target.value)} placeholder="Author" disabled></input>
      <input className={style.field} type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder="Message"></input>
      <button className={style.btn} disabled={!text}>Send</button>
    </form>
  );
};