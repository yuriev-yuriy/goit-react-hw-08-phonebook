import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const contacts = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactsSuccess]: (state, action) => [action.payload, ...state],
  [actions.deleteContactsSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
  [actions.addContactsRequest]: () => true,
  [actions.addContactsSuccess]: () => false,
  [actions.addContactsError]: () => false,
  [actions.deleteContactsRequest]: () => true,
  [actions.deleteContactsSuccess]: () => false,
  [actions.deleteContactsError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});
