import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import UsersSlice from '../features/users/UsersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users:UsersSlice
  },
});
