import axios from 'axios';
import actions from './actions';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error.message));
  }
};

const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(actions.addContactsRequest());

  axios
    .post('./contacts', contact)
    .then(({ data }) => dispatch(actions.addContactsSuccess(data)))
    .catch(error => dispatch(actions.addContactsError(error.message)));
};

const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactsSuccess(id)))
    .catch(error => dispatch(actions.deleteContactsError(error.message)));
};

// eslint-disable-next-line import/no-anonymous-default-export
const phoneBookOperations = { fetchContacts, addContact, deleteContact };
export default phoneBookOperations;
