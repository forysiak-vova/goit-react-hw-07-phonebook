import contactReducer from './contacts/contact-reduser'
import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import {
    // persistReducer,
    // persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
import { contactApi } from './contacts/contacts-operations';
import { setupListeners } from '@reduxjs/toolkit/query'

// const persistConfig = {
//   key: 'items',
//     storage,
//     blacklist: ['filter']


// }
const middleware = (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}).concat(logger);

// const store = configureStore({
//     reducer: {
//     counter: persistReducer (persistConfig, contactReducer),
// },
//     middleware,
//     devTools: process.env.NODE_ENV === 'development'
// });
const store = configureStore({
    reducer: {
        counter: contactReducer,
         [contactApi.reducerPath]: contactApi.reducer,
},
    middleware,
    devTools: process.env.NODE_ENV === 'development',
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(contactApi.middleware),
    //   middeleware: (getDefaultMiddleware) => [...getDefaultMiddleware, pokemonApi.middleware]
});

// const persistor = persistStore(store)

// export default {store, persistor};

setupListeners(store.dispatch)

export default store;
