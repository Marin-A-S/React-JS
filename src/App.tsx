import { FC, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { AboutWithConnect } from './pages/About';
import { ChatPage } from './pages/ChatPage/ChatPage';
import { Header } from './components/Header';
import { ChatListPage } from './pages/ChatsPage';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeContext } from './utils/ThemeContext';

export const App: FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
      </ThemeContext.Provider>
    </Provider>
  );
};
