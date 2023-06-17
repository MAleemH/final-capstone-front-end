import { configureStore } from '@reduxjs/toolkit';
import therapyReducer from './Therapy/therapySlice';
import userReducer from './User/userSlice';
import reserveReducer from './Reserve/reserveSlice';

const store = configureStore({
  reducer: {
    therapy: therapyReducer,
    
  },
});

export default store;
