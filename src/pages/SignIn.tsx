import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from 'src/store/profile/slice';
import style from './Sign.module.css';

export const SignIn: FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    if (login === 'GeekBrains' && password === 'Student') {
      dispatch(auth(true));
      navigate(-1);
    } else {
      setError(true);
    }
  };

  return (
    <div className={style.wrapper}>
      <h2>Sing In</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <p>Login</p>
        <input
          type="text"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
          data-testid="login"
        />
        <p>Password</p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          data-testid="password"
        />
        <br />
        <button data-testid="btn-login">Login</button>
      </form>
      {error && <p style={{ color: 'maroon' }}>Incorrect login or password</p>}
    </div>
  );
};
