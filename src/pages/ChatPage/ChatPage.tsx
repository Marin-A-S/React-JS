import { FC, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'src/components/Form';
import { MessageList } from 'src/components/MessageList';
import { selectMasseges } from 'src/store/messages/selectors';
import { AUTHOR } from 'src/types';
import { addMessage } from 'src/store/messages/actions';
import { WithClasses } from 'src/HOC/WithClasses';
import style from './ChatPage.module.css';
import { ChatList } from 'src/components/ChatList';

export const ChatPage: FC = () => {
  const { chatId } = useParams();
  const messages = useSelector(selectMasseges);
  const dispatch = useDispatch();

  const MessageListWithClass = WithClasses(MessageList);

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author === AUTHOR.USER
    ) {
      const timeout = setTimeout(() => {
        dispatch(
          addMessage(chatId, {
            author: AUTHOR.BOT,
            text: 'Im Bot',
          })
        );
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [chatId, messages, dispatch]);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <div className="App">
      <div className={style.box}>
        <ChatList />
        <MessageList messages={chatId ? messages[chatId] : []} />
      </div>
      <Form />
    </div>
  );
};
