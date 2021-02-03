import { connect } from 'react-redux';
import actions from '../redux/phoneBook/actions';
import { getFilter } from '../redux/phoneBook/phoneBookSelectors';

const Filter = ({ value, onSubmit }) => {
  return (
    <>
      <p>Find contacts by name </p>
      <input type="text" value={value} onChange={onSubmit} />
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
