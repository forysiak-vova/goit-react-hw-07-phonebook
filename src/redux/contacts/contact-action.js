import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit'

const addContacts = createAction('contacts_add', ({ name, number }) => ({
   payload: {
      id: nanoid(),
      name,
      number,
   },
}));

const deleteContact = createAction('contacts_delete');
const changeFilter = createAction('change-filter');

export default { addContacts, deleteContact, changeFilter };




















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