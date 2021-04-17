import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import authSelectors from '../redux/auth/auth-selectors';
import phoneBookOperations from '../redux/phoneBook/operations';
import ContactForm from '../Phonebook/ContactForm';
import Filter from '../Phonebook/Filter';
import ContactList from '../Phonebook/ContactList';
import { getIsLoading } from '../redux/phoneBook/phoneBookSelectors';
import image from '../images/bg-grey.jpg';
import s from './ViewStyles.module.css';

const styles = {
  layout: {
    backgroundImage: `url(${image})`,
    backgroundSize: '100%',
  },
};

const PhonebookView = () => {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getIsLoading);
  const name = useSelector(authSelectors.getUsername);
  useEffect(() => {
    dispatch(phoneBookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.wrapper} style={styles.layout}>
      <div className={s.Wrapper}>
        <h1 className={s.title}>{name} Phonebook</h1>
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
      <ContactForm />
    </div>
  );
};

export default PhonebookView;
