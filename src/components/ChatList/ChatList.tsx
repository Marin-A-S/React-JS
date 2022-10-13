import { FC, useEffect, useRef, useState } from 'react';
import { ListItem, List, ListSubheader, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { db } from 'src/services/firebase';
import { ref, remove, set } from 'firebase/database';
import { nanoid } from 'nanoid';
import style from './ChatList.module.css';

let chatName = '';

export const ChatList: FC<any> = ({ chats }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('chats has been updated');
  }, [chats]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value) {
      set(ref(db, `chats/${value}`), {
        id: nanoid(),
        name: value,
      });

      set(ref(db, `messages/${value}`), {
        name: value,
      });

      setValue('');
    }
  };

  const onRemoveChat = () => {
    if (chatName) {
      remove(ref(db, `chats/${chatName}`));
      remove(ref(db, `messages/${chatName}`));
    }
    chatName = '';
  };

  useEffect(() => {
    if (scrollRef.current != null) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  });

  return (
    <>
      <div className={style.wrapper}>
        <List
          sx={{
            width: '150px',
            height: '100%',
            maxWidth: 360,
            bgcolor: '#f3f3f3',
          }}
          aria-label="contacts"
          subheader={
            <ListSubheader
              sx={{
                bgcolor: '#f3f3f3',
                fontFamily: "Verdana, sans-serif",
                fontSize: '18px',
                fontWeight: '600',
                color: 'maroon',
                lineHeight: '35px',
              }}
            >
              <div className={style.title}>
                Chat{' '}
                <span style={{ fontSize: '16px', color: 'darkred' }}>
                  {chatName}
                </span>
              </div>
            </ListSubheader>
          }
        >
          <div className={style.message_scroll}>
            {chats.map((chat: any) => (
              <ListItemButton key={chat.id} sx={{ padding: 0 }}>
                <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
                  <Link
                    to={`/chats/${chat.id}`}
                    onClick={() => (chatName = chat.name)}
                  >
                    {chat.name}
                  </Link>
                </ListItem>
              </ListItemButton>
            ))}
            <div ref={scrollRef} />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              className={style.input}
            />
            <br />
            <button className={style.buttonCreate}>CREATE CHAT</button>
            <button
              className={style.buttonCreate}
              onClick={() => onRemoveChat()}
              type="button"
            >
              REMOVE CHAT
            </button>
          </form>
        </List>
      </div>
    </>
  );
};
