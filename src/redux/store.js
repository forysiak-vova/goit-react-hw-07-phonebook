import contactReducer from './contacts/contact-reduser'
import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { contactApi } from './contacts/contacts-operations';
import { setupListeners } from '@reduxjs/toolkit/query'



const middleware = (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}).concat(logger);



const store = configureStore({
    reducer: {
        counter: contactReducer,
         [contactApi.reducerPath]: contactApi.reducer,
},
    middleware,
    devTools: process.env.NODE_ENV === 'development',
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(contactApi.middleware),
});



setupListeners(store.dispatch)

export default store;
