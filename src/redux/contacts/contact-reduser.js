import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit'
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
   changeFilter
} from './contact-action'

// import fetchCont from "./contacts-operations";
// import addCont from './contacts-operations.js';
// import deleteCont from './contacts-operations'

// const contact = createReducer([], {
//    [addCont.addContact.fulfilled]: (state, { payload }) => [payload, ...state],
//    [fetchCont.fetchContact.fulfilled]: (_, {payload}) => payload,
//    [deleteCont.deleteContact.fulfilled]: (state, {payload}) => state.filter(contact => contact.id !== payload.id)
// }) 

// const loading = createReducer(false, {
//    [fetchCont.fetchContact.pending]: () => true,
//    [fetchCont.fetchContact.fulfilled]: () => false,
//    [fetchCont.fetchContact.rejected]: () => false,
//    [addCont.addContact.pending]: () => true,
//    [addCont.addContact.fulfilled]: () => false,
//    [addCont.addContact.rejected]: () => false,
//    [deleteCont.deleteContact.pending]: () => true,
//    [deleteCont.deleteContact.fulfilled]: () => false,
//    [deleteCont.deleteContact.rejected]: () => false,
// })

const filter = createReducer('', {
   [changeFilter]: (_, { payload }) => payload
})

// const error = createReducer(null, {
//     [fetchCont.fetchContact.rejected]: (_, { payload }) => payload,
//     [fetchCont.fetchContact.pending]: () => null,
    
//     [addCont.addContact.rejected]: (_, { payload }) => payload,
//     [addCont.addContact.pending]: () => null,
    
//     [deleteCont.deleteContact.rejected]: (_, { payload }) => payload,
//     [deleteCont.deleteContact.pending]: () => null,
    
// })

export default combineReducers ({
   // contact,
   filter,
   // loading,
   // error,
});