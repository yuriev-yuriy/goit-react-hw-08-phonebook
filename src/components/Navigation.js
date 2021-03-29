import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../redux/auth/';
import s from './Components.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={s.container}>
      <NavLink to="/" color="inherit">
        Main
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" color="inherit">
          PhoneBook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
