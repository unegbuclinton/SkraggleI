import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSlice';
import campaignReducer from 'features/campaign/campaignSlice';
import contactReducer from 'features/contact/contactSlice';
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
  campaign: campaignReducer
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
