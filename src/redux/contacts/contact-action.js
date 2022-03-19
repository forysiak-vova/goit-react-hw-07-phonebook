// import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');


export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactError');

// export const deleteContact = createAction('contacts_delete');
export const changeFilter = createAction('change-filter');






















// const addContacts = ({ name, number }) => {
//    return {
//       type: 'contacts_add',
//       payload: {
//         id: nanoid(),
//         name,
//         number,
//       },
//    }
// };

// const deleteContact = contactId => {
//    return {
//       type: 'contacts_delete',
//       payload: contactId,
//    }
// }

// const changeFilter = value => ({
//    type: 'change-filter',
//    payload: value,
// })