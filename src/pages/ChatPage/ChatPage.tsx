import { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Form } from 'src/components/Form';
import { MessageList } from 'src/components/MessageList';
import { selectMasseges } from 'src/store/messages/selectors';
import { WithClasses } from 'src/HOC/WithClasses';
import style from './ChatPage.module.css';
import { ChatList } from 'src/components/ChatList';

export const ChatPage: FC = () => {
  const { chatId } = useParams();
  const messages = useSelector(selectMasseges);

  const MessageListWithClass = WithClasses(MessageList);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <div className="App">
      <div className={style.box}>
        <ChatList />
        <MessageListWithClass
          messages={chatId ? messages[chatId] : []}
          title={'Messages'}
        />
      </div>
      <Form />
    </div>
  );
};
