import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <Link to="/register">SignUp</Link>
      <Link to="/login">Login</Link>
    </>
  );
};
export default AuthNav;
