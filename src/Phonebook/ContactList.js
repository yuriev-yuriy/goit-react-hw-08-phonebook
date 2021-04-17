import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../redux/phoneBook/phoneBookSelectors';
import phoneBookOperations from '../redux/phoneBook/operations';
import s from './Phonebook.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const delMethot = id => dispatch(phoneBookOperations.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <div className={s.logo}>{name[0].toUpperCase()}</div>
          <div className={s.contact}>
            <div>{name}</div>
            <div>{number}</div>
          </div>
          <button className={s.btn} onClick={() => delMethot(id)}>
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
