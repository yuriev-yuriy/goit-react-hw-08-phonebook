import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.phoneBook.loading;

const getFilter = state => state.phoneBook.filter;

const getAllContacts = state => state.phoneBook.contacts;

const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      ({ name, contact }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter),
    );
  },
);

const phoneBookSelectors = {
  getLoading,
  getFilter,
  getFilteredContacts,
};
export default phoneBookSelectors;
