import { connect } from 'react-redux';
import actions from '../redux/phoneBook/actions';
import { getFilter } from '../redux/phoneBook/phoneBookSelectors';
import s from './Phonebook.module.css';

const Filter = ({ value, onSubmit }) => {
  return (
    <>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onSubmit}
        placeholder="Find contacts by name"
      />
    </>
  );
};

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: e => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
