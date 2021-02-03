import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import { UserMenu } from './UserMenu/UserMenu';
import { authSelectors } from '../redux/auth';
import Navigation from './Navigation';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
