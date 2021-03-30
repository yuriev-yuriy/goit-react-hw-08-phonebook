import { NavLink } from 'react-router-dom';
import s from './Components.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={s.text}>
        SignUp
      </NavLink>
      <NavLink to="/login" className={s.text}>
        Login
      </NavLink>
    </div>
  );
};
export default AuthNav;
