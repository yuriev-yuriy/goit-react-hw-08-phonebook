import { NavLink } from 'react-router-dom';
import s from './ViewStyles.module.css';
import image from '../images/uzorT.jpg';

const MainView = () => {
  return (
    <div className={s.wrapper} style={{ backgroundImage: `url(${image})` }}>
      <div className={s.side}></div>
      <div className={s.center}>
        <h3 className={s.content}>Welcome to PhoneBook APP</h3>
        <h4 className={s.content}>
          to continue
          <NavLink to="/login" className={s.link}>
            {' '}
            Log In{' '}
          </NavLink>{' '}
          or
          <NavLink to="/register" className={s.link}>
            {' '}
            Sign Up{' '}
          </NavLink>
        </h4>
      </div>
      <div className={s.otherSide}></div>
    </div>
  );
};

export default MainView;
