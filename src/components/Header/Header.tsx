import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { StoreState } from 'src/store';
import { auth } from 'src/store/profile/slice';
import style from './Header.module.css';

const nav = [
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
  {
    name: 'Articles',
    path: '/articles',
  },
  {
    name: 'ArticlesThunk',
    path: '/articlesThunk',
  },
];

export const Header: FC = () => {
  const isAuth = useSelector((state: StoreState) => state.profile.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(auth(false));
  };

  const handleLogin = () => {
    navigate('/signin');
  };

  return (
    <>
      <header style={{ 
        backgroundColor: '#f3f3f3',
        borderTop: '1px solid gray',
        borderBottom: '1px solid gray',}}>
        <ul className={style.ul}>
          {nav.map((item, idx) => (
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
        {isAuth && (
          <button
            onClick={handleLogout}
            className={`${style.btnSign} ${style.btnSignOut}`}
          >
            Sign out
          </button>
        )}
        {!isAuth && (
          <button
            onClick={handleLogin}
            className={`${style.btnSign} ${style.btnSignIn}`}
          >
            Sign in
          </button>
        )}
        <Outlet />
      </main>
    </>
  );
};
