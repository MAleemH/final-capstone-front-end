import { configureStore } from '@reduxjs/toolkit';
import therapyReducer from './Therapy/therapySlice';

const store = configureStore({
  reducer: {
    therapy: therapyReducer,
  },
});

export default store;
