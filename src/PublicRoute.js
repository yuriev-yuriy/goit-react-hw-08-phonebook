import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from './redux/auth';

function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...otherProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...otherProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}

export default PublicRoute;
