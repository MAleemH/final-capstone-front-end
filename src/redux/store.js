import { configureStore } from '@reduxjs/toolkit';
import therapyReducer from './Therapy/therapySlice';
import userReducer from './User/userSlice';

const store = configureStore({
  reducer: {
    therapy: therapyReducer,
    user: userReducer,
  },
});

export default store;
