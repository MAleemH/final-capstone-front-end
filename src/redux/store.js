import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import therapyReducer from './Therapy/therapySlice';
import userReducer from './User/userSlice';
import reserveReducer from './Reserve/reserveSlice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: {
    therapy: therapyReducer,
    user: userReducer,
    reserve: reserveReducer,
  },
  middleware: customizedMiddleware,
});

export default store;
