/* eslint-disable no-console */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const reserveURL = 'https://counseling-app.onrender.com/api/v1/users/';

const initialState = {
  loading: false,
  reserves: [],
  singleReserve: null,
  error: '',
};

export const fetchReserves = createAsyncThunk('reserve/fetchReserve', async (_, { getState }) => {
  try {
    const userState = await getState().user.user;
    const config = {
      method: 'get',
      url: `${reserveURL}${userState.user.id}/appointments`,
      headers: {
        Authorization: userState.user.authentication_token,
        'Content-Type': 'application/json',
      },
    };
    const response = await axios(config);
    return response;
  } catch (error) {
    return error;
  }
});

export const fetchSingleReserve = createAsyncThunk('reserve/fetchSingleReserve', async (reserveID, { getState }) => {
  try {
    const userState = await getState().user.user;
    const config = {
      method: 'get',
      url: `${reserveURL}${userState.user.id}/reserves/${reserveID}`,
      headers: {
        Authorization: userState.user.authentication_token,
        'Content-Type': 'application/json',
      },
    };
    const response = await axios(config);
    return response;
  } catch (error) {
    return error;
  }
});

export const postReserve = createAsyncThunk('reserve/postReserve', async (reserveData, { getState }) => {
  try {
    const userState = await getState().user.user;
    const config = {
      method: 'post',
      url: `${reserveURL}${userState.user.id}/appointments`,
      headers: {
        Authorization: userState.user.authentication_token,
        'Content-Type': 'application/json',
      },
      // data: { ...reserveData, user_id: userState.user.id },
      data: {
        ...reserveData,
        appointment: {
          ...reserveData.appointment,
          user_id: userState.user.id,
        },
      },
    };
    const response = await axios(config);
    return response;
  } catch (error) {
    return error;
  }
});

export const deleteReserve = createAsyncThunk('reserve/deleteReserve', async (deleteID, { getState }) => {
  try {
    const userState = await getState().user.user;
    const config = {
      method: 'delete',
      url: `${reserveURL}${userState.user.id}/appointments/${deleteID}`,
      headers: {
        Authorization: userState.user.authentication_token,
        'Content-Type': 'application/json',
      },
    };
    const response = await axios(config);
    return response;
  } catch (error) {
    return error;
  }
});

/* eslint-disable no-param-reassign */

const reserveSlice = createSlice({
  name: 'reserve',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchReserves.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
      .addCase(fetchReserves.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.reserves = action.payload.data;
      })
      .addCase(fetchReserves.rejected, (state) => {
        state.loading = false;
        state.error = '';
      })
      .addCase(fetchSingleReserve.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleReserve.fulfilled, (state, action) => {
        state.loading = false;
        state.singleReserve = action.payload.data;
        state.error = '';
      })
      .addCase(fetchSingleReserve.rejected, (state) => {
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
