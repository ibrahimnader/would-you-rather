import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import questionsSlice from '../features/questions/questionsSlice';
import UsersSlice from '../features/users/UsersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users:UsersSlice,
    questions:questionsSlice
  },
});
