import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from 'src/pages/Main';
import { Header } from './Header';
import { Profile } from 'src/pages/Profile';
import { ChatPage } from 'src/pages/ChatPage';
import { ChatListPage } from 'src/pages/ChatsPage';
import { AboutWithConnect } from 'src/pages/About';

export const AppRouter: FC = () => (
  <Routes>
    <Route path="/" element={<Header />}>
      <Route index element={<Main />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<AboutWithConnect />} />
      <Route path="chats">
        <Route index element={<ChatListPage />} />
        <Route path=":chatId" element={<ChatPage />} />
      </Route>
      <Route path="*" element={<div>404 page</div>} />
    </Route>
  </Routes>
);
