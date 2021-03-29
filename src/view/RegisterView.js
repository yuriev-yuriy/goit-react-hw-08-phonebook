import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import s from './ViewStyles.module.css';

const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    console.log(`Forma ${(name, email, password)}`);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.Wrapper}>
      <h1>SinUp here</h1>
      <form onSubmit={handleSubmit} className={s.Wrapper}>
        <label className={s.input}>
          name
          <input value={name} type="text" name="name" onChange={handleChange} />
        </label>
        <label className={s.input}>
          email
          <input
            value={email}
            type="email"
            name="email"
            onChange={handleChange}
          />
        </label>
        <label className={s.input}>
          password
          <input
            value={password}
            type="password"
            name="password"
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={s.btn}>
          sign up
        </button>
        <h2>password must be at least 7 characters</h2>
        <h3>пароль должен быть не менее 7 символов</h3>
      </form>
    </div>
  );
};

export default RegisterView;
