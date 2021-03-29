import { NavLink } from 'react-router-dom';
import s from './Components.module.css';

const AuthNav = () => {
  return (
    <div className={s.container}>
      <NavLink to="/register" color="inherit">
        SignUp
      </NavLink>
      <NavLink to="/login" color="inherit">
        Login
      </NavLink>
    </div>
  );
};
export default AuthNav;
