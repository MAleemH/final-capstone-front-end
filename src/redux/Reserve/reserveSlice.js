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
