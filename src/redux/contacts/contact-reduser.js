import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit'
import { changeFilter } from './contact-action';

const filter = createReducer('', {
   [changeFilter]: (_, { payload }) => payload
});

export default combineReducers ({
   filter,
});























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


// const error = createReducer(null, {
//     [fetchCont.fetchContact.rejected]: (_, { payload }) => payload,
//     [fetchCont.fetchContact.pending]: () => null,
    
//     [addCont.addContact.rejected]: (_, { payload }) => payload,
//     [addCont.addContact.pending]: () => null,
    
//     [deleteCont.deleteContact.rejected]: (_, { payload }) => payload,
//     [deleteCont.deleteContact.pending]: () => null,
    
// })

