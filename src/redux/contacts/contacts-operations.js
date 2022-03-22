import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   // addContactRequest,
   // addContactSuccess,
   // addContactError,
   // deleteContactRequest,
   // deleteContactSuccess,
   // deleteContactError,
   // fetchContactRequest,
   // fetchContactSuccess,
   // fetchContactError,
} from './contact-action';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

axios.defaults.baseURL = 'https://6234cc41946d59e289747f64.mockapi.io/contacts'

// ============================================ FETCH

// const fetchContact = () => async dispatch => {
//    dispatch(fetchContactRequest())
//    try {
//       const {data} = await axios.get('/contacts')
//       dispatch(fetchContactSuccess(data))
//    } catch (error) {
//       dispatch(fetchContactError(error))
//    }
   

//    // axios.get('/contacts')
//    //    .then(({ data }) => dispatch(fetchContactSuccess(data)))
//    //     .catch(error => dispatch(fetchContactError(error)))
// }

// const fetchContact = createAsyncThunk(
//    'contacts/fetchContacts',
//    async (_, {rejectWithValue}) => {
//       try {
//          const { data } = await axios.get('/contacts')
//          return data;
//       } catch (error) {
//          return rejectWithValue(error.message)
//       }
//    }
// )

// ==============================================================  ADD
// const addContacts = ({ name, number }) => dispatch => {
//    const contact = { name, number }
   
//    dispatch(addContactRequest())

//    axios.post('/contacts', contact)
//       .then(({ data }) => dispatch(addContactSuccess(data)))
//       .catch(error => dispatch(addContactError(error)))
// };

//  const addContact = createAsyncThunk(
//    'contacts/addContact',
//    async ({ name, number }) => {
//       const contact = { name, number }
//       const { data } = await axios.post('/contacts', contact)
//       console.log(data)
//       return data;
//    }
// )


// ========================================================  DELETE
// const deleteContact = contactId => dispatch => {

//    dispatch(deleteContactRequest())

//    axios.delete(`/contacts/${contactId}`)
//    .then(() => dispatch(deleteContactSuccess(contactId)))
//    .catch(error => dispatch(deleteContactError(error)))
// }

// const deleteContact = createAsyncThunk(
//    'contacts/deleteContact',
//     async (contactId) => {
//        const { data } = await axios.delete(`/contacts/${contactId}`)
//        return data;
//    }
// )

// export default {
//     fetchContact,
//     addContact,
//     deleteContact,
// }

// ============================================== SLICEAPI ================================================================

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { userAPI } from './userAPI'

// // First, create the thunk
// const fetchUserById = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (userId, thunkAPI) => {
//     const response = await userAPI.fetchById(userId)
//     return response.data
//   }
// )


// ====================================================     RTK TOOLKIT    ==========================================================



export const contactApi = createApi({
  reducerPath: 'contactApi',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://6234cc41946d59e289747f64.mockapi.io/contacts' }),
   tagTypes: ['CONTACT'],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
       query: () => `/contacts`,
            providesTags: ['CONTACT'],
    }),
     createContact: builder.mutation({
        query: newContact => ({
           url: '/contacts',
           method: 'POST',
           body: {
              name: newContact.name,
              number: newContact.number,
            },
        }),
         invalidatesTags: ['CONTACT'],
     }),
     deleteContact: builder.mutation({
        query: contactId => ({
           url: `/contacts/${contactId}`,
           method: 'DELETE',
        }),
         invalidatesTags: ['CONTACT'],
     })
  }),
})

export const {
   useFetchContactsQuery,
   useDeleteContactMutation,
   useCreateContactMutation,
} = contactApi;
