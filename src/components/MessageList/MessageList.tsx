import { FC, useEffect, useRef } from 'react';
import style from './MessageList.module.css';

export const MessageList: FC<any> = ({ messages, title }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current != null) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  });

  return (
    <div className={style.box2}>
      <h3 className={style.title}>{title} </h3>
      <div className={style.message_scroll}>
        <ul className={style.list}>
          {messages.map((message: any, idx: number) => (
            <li key={idx} data-testid="li">
              {message.author} : {message.text}
            </li>
          ))}
        </ul>
        <div ref={scrollRef} />
      </div>
    </div>
  );
};
