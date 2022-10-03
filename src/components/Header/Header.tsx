import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import style from './Header.module.css';

const navigate = [
  {
    name: 'Main',
    path: '/',
  },
  {
    name: 'Chats',
    path: '/chats',
  },
  {
    name: 'Profile',
    path: '/profile',
  },
  {
    name: 'About',
    path: '/about',
  },
];

export const Header: FC = () => {
  return (
    <>
      <header style={{ 
        backgroundColor: '#f3f3f3',
        borderTop: '1px solid gray',
        borderBottom: '1px solid gray',}}>
        <ul className={style.ul}>
          {navigate.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  color: isActive ? 'darkgreen' : 'maroon',
                })}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
