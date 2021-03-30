import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Button from '@material-ui/core/Button';
import s from '../Components.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUsername);
  return (
    <div>
      <p className={s.text}>Welcome {userName}</p>
      <Button
        className={s.btn}
        variant="outlined"
        color="secondary"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Выйти
      </Button>
    </div>
  );
};
