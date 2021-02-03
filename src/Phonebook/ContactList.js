// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import phoneBookSelectors from '../redux/phoneBook/selectors';
import phoneBookOperations from '../redux/phoneBook/operations';
import actions from '../redux/phoneBook/actions';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(phoneBookSelectors.getFilteredContacts);
  const delMethot = id => dispatch(phoneBookOperations.deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}:{number}
          <button onClick={() => delMethot(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

// const getFilteredContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(
//     contact =>
//       contact.name.toLowerCase().includes(normalizedFilter) ||
//       contact.number.includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({phoneBook: { contacts, filter }}) => ({
//   contacts: getFilteredContacts(contacts, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   delMethot: id => dispatch(actions.deleteContactsSuccess(id)),
// });

export default ContactList;
