import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import { UserMenu } from './UserMenu/UserMenu';
import { authSelectors } from '../redux/auth';
import Navigation from './Navigation';
import s from './Components.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={s.container}>
      <Navigation />
      {isLoggedIn ? (
        <UserMenu className={s.text} />
      ) : (
        <AuthNav className={s.text} />
      )}
    </div>
  );
};
