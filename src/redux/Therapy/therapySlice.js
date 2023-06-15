import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getTherapistURL = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=24';
const postTherapistURL = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=24';
const deleteTherapistURL = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=24';
const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/drhbncewu/image/upload';

const initialState = {
  loading: false,
  therapists: [],
  error: '',
};

export const fetchTherapists = createAsyncThunk('therapy/fetchTherapists', async () => {
  try {
    const { data } = await (axios.get(getTherapistURL));
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const postTherapist = createAsyncThunk('therapy/postTherapist', async (therapistData) => {
  try {
    const config = {
      method: 'post',
      url: postTherapistURL,
      headers: {
        Authorization: 'MY_AUTH_TOKEN',
        'Content-Type': 'application/json',
      },
      data: therapistData,
    };
    const response = await axios(config);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const deleteTherapist = createAsyncThunk('therapy/deleteTherapist', async (deleteID) => {
  try {
    const config = {
      method: 'delete',
      url: deleteTherapistURL,
      headers: {
        Authorization: 'MY_AUTH_TOKEN',
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

export const uploadTherapist = createAsyncThunk('therapy/uploadTherapist', async (formData) => {
  try {
    const response = await axios.post(cloudinaryAPI, formData, { params: { folder: 'therapy' } });
    // setCloudinaryImage(response.data.secure_url);
    return response.data.secure_url;
  } catch (error) {
    console.log(error);
    return error;
  }
});

/* eslint-disable no-param-reassign */

const therapySlice = createSlice({
  name: 'therapy',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTherapists.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
      .addCase(fetchTherapists.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.therapists = action.payload.therapists;
      })
      .addCase(fetchTherapists.rejected, (state) => {
        state.loading = false;
        state.error = '';
      })
      .addCase(postTherapist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postTherapist.fulfilled, (state, action) => {
        state.loading = false;
        state.therapists.push(action.payload);
      })
      .addCase(postTherapist.rejected, (state) => {
        state.loading = false;
        state.error = '';
      })
      .addCase(deleteTherapist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTherapist.fulfilled, (state, action) => {
        state.loading = false;
        state.therapists = state.therapists.filter(
          (therapist) => therapist.id !== action.payload.id,
        );
      })
      .addCase(deleteTherapist.rejected, (state) => {
        state.loading = false;
        state.error = '';
      });
  },
});

/* eslint-disable no-param-reassign */

export default therapySlice.reducer;