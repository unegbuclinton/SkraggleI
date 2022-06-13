import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSlice';
import campaignReducer from 'features/campaign/campaignSlice';
import contactReducer from 'features/contact/contactSlice';
import donationReducer from 'features/donation/donationSlice';
import eventReducer from 'features/events/eventSlice';
import formsReducer from 'features/forms/formsSlice';
import mailblastReducer from 'features/mailblast/mailBlastSlice';
import p2pReducer from 'features/p2p/p2pSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';
// import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const rootReducer = combineReducers({
  auth: authReducer,
  contact: contactReducer,
  campaign: campaignReducer,
  p2p: p2pReducer,
  donation: donationReducer,
  forms: formsReducer,
  events: eventReducer,
  mailblast: mailblastReducer
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});
export const persistor = persistStore(store);
export default store;
