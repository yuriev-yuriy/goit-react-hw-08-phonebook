import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import phoneBookOperations from '../redux/phoneBook/operations';
import ContactForm from '../Phonebook/ContactForm';
import Filter from '../Phonebook/Filter';
import ContactList from '../Phonebook/ContactList';
import s from '../App.module.css';
import { getIsLoading } from '../redux/phoneBook/phoneBookSelectors';

const PhonebookView = () => {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getIsLoading);
  useEffect(() => {
    dispatch(phoneBookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.App}>
      <div className={s.Wrapper}>
        <h1>Phonebook</h1>
        <ContactForm />
        <Filter />
        {isLoadingContacts && <h1>Loading...</h1>}
      </div>
      <ContactList />
    </div>
  );
};

// const mapStateToProps = state => ({
//   isLoading: getIsLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(operations.fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(PhonebookView);
export default PhonebookView;
