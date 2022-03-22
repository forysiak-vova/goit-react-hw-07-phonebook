import { createAction } from '@reduxjs/toolkit';
export const changeFilter = createAction('change-filter');













// export const fetchContactRequest = createAction('contacts/fetchContactRequest');
// export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
// export const fetchContactError = createAction('contacts/fetchContactError');























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