import axios from 'axios';
import {
   addContactRequest,
   addContactSuccess,
   addContactError,
   deleteContactRequest,
   deleteContactSuccess,
   deleteContactError,
   fetchContactRequest,
   fetchContactSuccess,
   fetchContactError,
} from './contact-action'

axios.defaults.baseURL = 'https://6234cc41946d59e289747f64.mockapi.io/contacts'

const fetchContact = () => async dispatch => {
   dispatch(fetchContactRequest())
   try {
      const {data} = await axios.get('/contacts')
      dispatch(fetchContactSuccess(data))
   } catch (error) {
      dispatch(fetchContactError(error))
   }
   

   // axios.get('/contacts')
   //    .then(({ data }) => dispatch(fetchContactSuccess(data)))
   //     .catch(error => dispatch(fetchContactError(error)))
}

const addContacts = ({ name, number }) => dispatch => {
   const contact = { name, number }
   
   dispatch(addContactRequest())

   axios.post('/contacts', contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error)))
};

const deleteContact = contactId => dispatch => {

   dispatch(deleteContactRequest())

   axios.delete(`/contacts/${contactId}`)
   .then(() => dispatch(deleteContactSuccess(contactId)))
   .catch(error => dispatch(deleteContactError(error)))
}

export default {
   fetchContact,
   addContacts,
   deleteContact,
}