import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import s from './RegisterView.module.css';

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
    <>
      <h1>SinUp here</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">signup</button>
      </form>
    </>
  );
};

export default RegisterView;
