import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../redux/auth/';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact>
        Main
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" exact>
          PhoneBook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
