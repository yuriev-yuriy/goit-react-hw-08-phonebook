import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { AppBar } from './components/AppBar';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const MainView = lazy(() => import('./view/MainView'));
const RegisterView = lazy(() => import('./view/RegisterView'));
const LoginView = lazy(() => import('./view/LoginView'));
const PhonebookView = lazy(() => import('./view/PhonebookView'));
const NotFoundView = lazy(() => import('./view/NotFoundView'));

const App = () => {
  const dispatch = useDispatch();
  const isReloaded = useSelector(authSelectors.getIsReloaded);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isReloaded && (
      <>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/">
              <MainView />
            </PublicRoute>
            <PublicRoute path="/register" restricted redirectTo="/contacts">
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <PhonebookView />
            </PrivateRoute>

            <PublicRoute>
              <NotFoundView />
            </PublicRoute>
          </Switch>
        </Suspense>
      </>
    )
  );
};

export default App;
