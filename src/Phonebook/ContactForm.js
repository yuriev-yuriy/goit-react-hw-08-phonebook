import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from '../App.module.css';
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
    <>
      <form onSubmit={makeSubmit}>
        <label htmlFor="name">
          Name
          <input type="text" value={name} onChange={changeNameInput} required />
        </label>

        <label htmlFor="number">
          Number
          <input
            type="tel"
            value={number}
            onChange={changeNumberInput}
            required
          />
        </label>
        <button className={s.Btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

// const mapStateToProps = state => {
//   const { phoneBook:{contacts} } = state;
//   return {
//     contacts: contacts,
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (name, number) => dispatch(actions.addContactsSuccess(name, number)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
export default ContactForm;
