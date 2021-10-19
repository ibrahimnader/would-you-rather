import { configureStore } from '@reduxjs/toolkit';
import questionsSlice from '../features/questions/questionsSlice';
import UsersSlice from '../features/users/UsersSlice';

export const store = configureStore({
  reducer: {
    users:UsersSlice,
    questions:questionsSlice
  },
});
