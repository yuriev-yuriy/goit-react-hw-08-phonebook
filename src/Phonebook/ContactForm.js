import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './Phonebook.module.css';
import { getContacts } from '../redux/phoneBook/phoneBookSelectors';
import phoneBookOperations from '../redux/phoneBook/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const reset = () => {
    setName('');
    setNumber('');
  };

  const changeNameInput = event => {
    setName(event.currentTarget.value, ...name);
  };

  const changeNumberInput = event => {
    setNumber(event.currentTarget.value);
  };

  const makeSubmit = event => {
    event.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
      reset();
      return;
    }
    dispatch(phoneBookOperations.addContact(name, number));
    reset();
  };

  return (
    <div className={s.wrap}>
      <form onSubmit={makeSubmit} className={s.transparent}>
        <div className={s.formInner}>
          <h3>Add Contact </h3>
          <label htmlFor="name">Name</label>
          <input type="text" value={name} onChange={changeNameInput} required />
          <label htmlFor="number">Number</label>
          <input
            type="tel"
            value={number}
            onChange={changeNumberInput}
            required
          />
          <button className={s.addBtn} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
