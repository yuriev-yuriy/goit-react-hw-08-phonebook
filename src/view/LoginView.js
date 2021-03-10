import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth/';
import s from '../App.module.css';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.Wrapper}>
      <h1>Login here</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {' '}
          Email
          <input
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <label>
          {' '}
          Password
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </label>
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};

export default LoginView;
