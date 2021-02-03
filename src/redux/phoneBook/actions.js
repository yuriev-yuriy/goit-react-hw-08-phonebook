import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('phoneBook/fetchContactsRequest');
const fetchContactsSuccess = createAction('phoneBook/fetchContactsSuccess');
const fetchContactsError = createAction('phoneBook/fetchContactsError');

const addContactsRequest = createAction('phoneBook/addContactsRequest');
const addContactsSuccess = createAction('phoneBook/addContactsSuccess');
const addContactsError = createAction('phoneBook/addContactsError');

export const deleteContactsRequest = createAction(
  'phoneBook/deleteContactsRequest',
);
export const deleteContactsSuccess = createAction(
  'phoneBook/deleteContactsSuccess',
);
export const deleteContactsError = createAction(
  'phoneBook/deleteContactsError',
);

const changeFilter = createAction('phoneBook/Filter');

// const addContact = (name, number) => ({
//   type: types.Add,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContact = (id) => ({
//   type: types.Delete,
//   payload: id,
// })

// const changeFilter = (value) => ({
//   type: types.Filter,
//   payload: value,
// })

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  addContactsError,
  addContactsSuccess,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  changeFilter,
};
