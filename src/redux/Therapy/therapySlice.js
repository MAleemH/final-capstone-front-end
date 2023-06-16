import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const therapistURL = 'http://localhost:3000/api/v1/users/';
const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/drhbncewu/image/upload';

const initialState = {
  loading: false,
  therapists: [],
  error: '',
};

export const fetchTherapists = createAsyncThunk('therapy/fetchTherapists', async ({ getState }) => {
  try {
    const userState = await getState().user.user;
    const config = {
      method: 'get',
      url: `${therapistURL}${userState.user.id}/therapists`,
      headers: {
        Authorization: userState.user.authentication_token,
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

export const fetchSingleTherapist = createAsyncThunk('therapy/fetchSingleTherapist', async (therapistID, { getState }) => {
  try {
    const userState = await getState().user.user;
    const config = {
      method: 'get',
      url: `${therapistURL}${userState.user.id}/therapists/${therapistID}`,
      headers: {
        Authorization: userState.user.authentication_token,
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

export const postTherapist = createAsyncThunk('therapy/postTherapist', async (therapistData, { getState }) => {
  try {
    const userState = await getState().user.user;
    const config = {
      method: 'post',
      url: `${therapistURL}${userState.user.id}/therapists`,
      headers: {
        Authorization: userState.user.authentication_token,
        'Content-Type': 'application/json',
      },
      data: { ...therapistData, user_id: userState },
    };
    const response = await axios(config);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const deleteTherapist = createAsyncThunk('therapy/deleteTherapist', async (deleteID, { getState }) => {
  try {
    const userState = await getState().user.user;
    const config = {
      method: 'delete',
      url: `${therapistURL}${userState.user.id}/therapists/${deleteID}`,
      headers: {
        Authorization: userState.user.authentication_token,
        'Content-Type': 'application/json',
      },
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
    // console.log(response.data.secure_url);
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
      .addCase(fetchSingleTherapist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleTherapist.fulfilled, (state) => {
        state.loading = false;
        state.error = '';
      })
      .addCase(fetchSingleTherapist.rejected, (state) => {
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
      })
      .addCase(uploadTherapist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadTherapist.fulfilled, (state) => {
        state.loading = false;
        state.error = '';
      })
      .addCase(uploadTherapist.rejected, (state) => {
        state.loading = false;
        state.error = '';
      });
  },
});

/* eslint-disable no-param-reassign */

export default therapySlice.reducer;
