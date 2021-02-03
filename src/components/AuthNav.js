import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import s from './AppBar.module.css';

const AuthNav = () => {
  return (
    <div className={s.container}>
      <Link component={RouterLink} to="/register" color="inherit">
        SignUp
      </Link>
      <Link component={RouterLink} to="/login" color="inherit">
        Login
      </Link>
    </div>
  );
};
export default AuthNav;
