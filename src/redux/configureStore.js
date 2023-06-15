import { configureStore } from '@reduxjs/toolkit';
// import reservationsReducer from './reservation/reservationsSlice';

const token = localStorage.getItem('token');
const initialState = {
  auth: {
    token: token || null,
    isAuthenticated: !!token,
  },
};

export default configureStore({

  preloadedState: initialState,
});
