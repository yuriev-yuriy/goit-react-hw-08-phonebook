import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import image from '../images/uzorT.jpg';
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
    if (password.length >= 7) {
      dispatch(authOperations.register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    } else {
      alert('Password should be at least 7 sharacters');
    }
  };

  return (
    <div className={s.wrapper} style={{ backgroundImage: `url(${image})` }}>
      <form onSubmit={handleSubmit} className={s.transparent}>
        <div className={s.formInner}>
          <h1>SignUp here</h1>
          <label className={s.input}>
            name
            <input
              value={name}
              type="text"
              name="name"
              onChange={handleChange}
            />
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
              min="7"
              onChange={handleChange}
            />
          </label>
          <button type="submit" className={s.btn}>
            sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterView;
