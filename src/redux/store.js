import contactReducer from './contacts/contact-reduser'
import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'items',
    storage,
    blacklist: ['filter']
}
const middleware = (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}).concat(logger);

const store = configureStore({
    reducer: {
    counter: persistReducer (persistConfig, contactReducer),
},
    middleware,
    devTools: process.env.NODE_ENV === 'development'
});

const persistor = persistStore(store)

export default {store, persistor};
