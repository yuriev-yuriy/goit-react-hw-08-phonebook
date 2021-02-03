import { useSelector } from 'react-redux';
import { AppBar, Typography } from '@material-ui/core';
import AuthNav from './AuthNav';
import { UserMenu } from './UserMenu/UserMenu';
import { authSelectors } from '../redux/auth';
import Navigation from './Navigation';
import s from './AppBar.module.css';

export const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={s.container}>
      <AppBar position="static">
        <Typography variant="h6" className={s.container}>
          <Navigation />

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Typography>
      </AppBar>
    </div>
  );
};
