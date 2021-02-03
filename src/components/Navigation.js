import React from 'react';
import { useSelector } from 'react-redux';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import { authSelectors } from '../redux/auth/';
import s from './AppBar.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={s.container}>
      <Link component={RouterLink} to="/" color="inherit">
        Main
      </Link>
      {isLoggedIn && (
        <Link component={RouterLink} to="/contacts" color="inherit">
          PhoneBook
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
