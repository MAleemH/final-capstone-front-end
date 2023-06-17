import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getReserveURL = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=24';
const postReserveURL = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=24';
const deleteReserveURL = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=24';

const initialState = {
  loading: false,
  reserves: [],
  error: '',
};

export const fetchReserve = createAsyncThunk('reserve/fetchReserve', async ({ getState }) => {
  try {
    const { token } = getState().user;
    const config = {
      method: 'get',
      url: getReserveURL,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
    const response = await axios(config);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const postReserve = createAsyncThunk('reserve/postReserve', async (reserveData, { getState }) => {
  try {
    const { token } = getState().user;
    const config = {
      method: 'post',
      url: postReserveURL,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: reserveData,
    };
    const response = await axios(config);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const deleteReserve = createAsyncThunk('reserve/deleteReserve', async (deleteID, { getState }) => {
  try {
    const { token } = getState().user;
    const config = {
      method: 'delete',
      url: deleteReserveURL,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: deleteID,
    };
    const response = await axios(config);
    // console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
});

/* eslint-disable no-param-reassign */

const reserveSlice = createSlice({
  name: 'therapy',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchReserve.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
      .addCase(fetchReserve.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.reserves = action.payload.reserves;
      })
      .addCase(fetchReserve.rejected, (state) => {
        state.loading = false;
        state.error = '';
      })
      .addCase(postReserve.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postReserve.fulfilled, (state, action) => {
        state.loading = false;
        state.reserves.push(action.payload);
        state.error = null;
      })
      .addCase(postReserve.rejected, (state) => {
        state.loading = false;
        state.error = '';
      })
      .addCase(deleteReserve.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteReserve.fulfilled, (state, action) => {
        state.loading = false;
        state.reserves = state.reserves.filter(
          (reserve) => reserve.id !== action.payload.id,
        );
        state.error = null;
      })
      .addCase(deleteReserve.rejected, (state) => {
        state.loading = false;
        state.error = '';
      });
  },
});

/* eslint-disable no-param-reassign */

export default reserveSlice.reducer;
