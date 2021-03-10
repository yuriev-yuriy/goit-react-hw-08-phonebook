import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loader from 'react-loader-spinner';
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
        {isLoadingContacts ? (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        ) : (
          <ContactList />
        )}
      </div>
    </div>
  );
};

export default PhonebookView;
