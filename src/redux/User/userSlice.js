import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const registerUserURL = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=24';
const loginUserURL = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=24';
const postUserURL = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=24';
const deleteUserURL = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=24';

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
      url: registerUserURL,
      data: registerData,
    };
    const response = await axios(config);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const loginUser = createAsyncThunk('user/loginUser', async (loginData, { getState }) => {
  try {
    const { token } = getState().user;
    const config = {
      method: 'post',
      url: loginUserURL,
      headers: {
        Authorization: `Bearer ${token}`,
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

export const deleteUser = createAsyncThunk('therapy/deleteUser', async (deleteID, { getState }) => {
  try {
    const { token } = getState().user;
    const config = {
      method: 'delete',
      url: deleteUserURL,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: deleteID,
    };
    const response = await axios(config);
    // console.log(response.data);
    await removeLocalUser();
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const postUser = createAsyncThunk('user/postUser', async (therapistData, { getState }) => {
  try {
    const { token } = getState().user;
    const config = {
      method: 'post',
      url: postUserURL,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: therapistData,
    };
    const response = await axios(config);
    console.log(response);
    await setLocalUser(response);
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
        setLocalUser(action.payload.user);
        state.user = (action.payload.user);
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
        setLocalUser(action.payload.user);
        state.user = (action.payload.user);
        state.error = '';
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.error = '';
      })
      .addCase(postUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = (action.payload.user);
        state.error = '';
      })
      .addCase(postUser.rejected, (state) => {
        state.loading = false;
        state.error = '';
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.loading = false;
        state.user = [];
        state.error = '';
      })
      .addCase(deleteUser.rejected, (state) => {
        state.loading = false;
        state.error = '';
      });
  },
});

/* eslint-disable no-param-reassign */

export default userSlice.reducer;
