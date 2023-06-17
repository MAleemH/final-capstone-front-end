import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const usersURL = 'http://localhost:3000/api/v1/users/';

const getLocalUser = async () => JSON.parse(localStorage.getItem('therapy'));

const setLocalUser = async (user) => localStorage.setItem('therapy', JSON.stringify(user));

const removeLocalUser = async () => localStorage.removeItem('therapy');

const initialState = {
  loading: false,
  user: getLocalUser() || [],
  error: '',
};

export const registerUser = createAsyncThunk('user/registerUser', async (registerData) => {
  try {
    const config = {
      method: 'post',
      url: usersURL,
      data: registerData,
    };
    console.log(config);
    const response = await axios(config);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const loginUser = createAsyncThunk('user/loginUser', async (loginData) => {
  try {
    // const token = getState().user.authentication_token;
    const config = {
      method: 'post',
      url: `${usersURL}sign_in`,
      headers: {
        // Authorization: `${token}`,
        'Content-Type': 'application/json',
      },
      data: loginData,
    };
    const response = await axios(config);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const forgotPassword = createAsyncThunk('user/forgotPassword', async (userData, { getState }) => {
  try {
    const userState = await getState().user.user;
    const config = {
      method: 'put',
      url: `${usersURL}password`,
      headers: {
        Authorization: userState.user.authentication_token,
        'Content-Type': 'application/json',
      },
      data: userData,
    };
    const response = await axios(config);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const logoutUser = createAsyncThunk('user/logoutUser', async (userData, { getState }) => {
  try {
    const userState = await getState().user.user;
    const config = {
      method: 'delete',
      url: `${usersURL}sign_out`,
      headers: {
        Authorization: userState.user.authentication_token,
        'Content-Type': 'application/json',
      },
      data: userData,
    };
    const response = await axios(config);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
});

/* eslint-disable no-param-reassign */

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        removeLocalUser();
        state.error = '';
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
        state.error = '';
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        removeLocalUser();
        setLocalUser(action.payload.data);
        state.user = (action.payload.data);
        state.error = '';
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.error = '';
      })
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        removeLocalUser();
        setLocalUser(action.payload.data);
        state.user = (action.payload.data);
        state.error = '';
      })
      .addCase(forgotPassword.rejected, (state) => {
        state.loading = false;
        state.error = '';
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        removeLocalUser();
        state.error = '';
      })
      .addCase(logoutUser.rejected, (state) => {
        state.loading = false;
        state.error = '';
      });
  },
});

/* eslint-disable no-param-reassign */

export default userSlice.reducer;
