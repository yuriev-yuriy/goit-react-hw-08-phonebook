import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import s from './App.module.css';
import { MainView } from './view/MainView';
import PhonebookView from './view/PhonebookView';
import RegisterView from './view/RegisterView';
import LoginView from './view/LoginView';
import NotFoundView from './view/NotFoundView';
import { AppBar } from './components/AppBar';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const App = () => {
  const dispatch = useDispatch();
  const isReloaded = useSelector(authSelectors.getIsReloaded);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isReloaded && (
      <div className={s.App}>
        <AppBar />
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute path="/" exact>
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
            {/* <PublicRoute >
          <NotFoundView />
          </PublicRoute> */}
          </Suspense>
        </Switch>
      </div>
    )
  );
};

export default App;
