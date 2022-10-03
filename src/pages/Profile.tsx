import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, toggleProfile } from 'src/store/profile/actions';
import { selectName, selectVisible } from 'src/store/profile/selectors';
import style from './Profile.module.css';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const visible = useSelector(selectVisible);
  const [value, setValue] = useState('');

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Profile page</h2>
      <p className={style.text}>Visibility:</p>
      <input type="checkbox" checked={visible} readOnly data-testid="input" />
      <button
        onClick={() => dispatch(toggleProfile())}
        className={style.button}
        data-testid="button"
      >
        Change visibility
      </button>
      <br /> <br />
      <p className={style.text} data-testid="name">
        Name: {name}
      </p>
      <p className={style.text}>Change name:</p>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        data-testid="inputName"
      />
      <button
        onClick={() => dispatch(changeName(value))}
        className={style.button}
        data-testid="buttonName"
      >
        Change name
      </button>
    </div>
  );
};
