// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import ipReducer from './slices/ipSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ip: ipReducer
  }
});
