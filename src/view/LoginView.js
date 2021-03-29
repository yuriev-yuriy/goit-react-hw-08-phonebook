import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth/';
import image from '../images/uzorT.jpg';
import s from './ViewStyles.module.css';

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
    <div className={s.wrapper} style={{ backgroundImage: `url(${image})` }}>
      <form onSubmit={handleSubmit} className={s.transparent}>
        <div className={s.formInner}>
          <h1>Login here</h1>
          <label for="email">
            Email
            <input
              id="email"
              required
              type="email"
              value={email}
              name="email"
              // placeholder="Enter Your Email..."
              onChange={handleChange}
            />
          </label>
          <label for="pass">
            {' '}
            Password
            <input
              id="pass"
              required
              type="password"
              value={password}
              name="password"
              // placeholder="Enter Your Password..."
              onChange={handleChange}
            />
          </label>
          <button className={s.btn} type="submit">
            LogIn
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginView;
