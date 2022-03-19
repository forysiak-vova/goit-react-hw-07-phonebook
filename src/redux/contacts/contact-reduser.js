import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit'
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
   changeFilter
} from './contact-action'

const contact = createReducer([], {
   [addContactSuccess]: (state, { payload }) => [payload, ...state],
   [fetchContactSuccess]: (_, {payload}) => payload,
   [deleteContactSuccess]: (state, {payload}) => state.filter(contact => contact.id !== payload)
}) 

const loading = createReducer(false, {
   [fetchContactRequest]: () => true,
   [fetchContactSuccess]: () => false,
   [fetchContactError]: () => false,
   [addContactRequest]: () => true,
   [addContactSuccess]: () => false,
   [addContactError]: () => false,
   [deleteContactRequest]: () => true,
   [deleteContactSuccess]: () => false,
   [deleteContactError]: () => false,
})

const filter = createReducer('', {
   [changeFilter]: (_, { payload }) => payload
})

// const error = createReducer(null, {

// })

export default combineReducers ({
   contact,
   filter,
   loading,
   // error,
});