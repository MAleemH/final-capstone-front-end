import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getUserURL = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=24';
const postUserURL = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=24';
const deleteUserURL = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=24';

const getLocalUser = async () => {
    return JSON.parse(localStorage.getItem('therapy'));
}


// When login set user
const setLocalUser = async (user) => {
    return localStorage.setItem('therapy', JSON.stringify(user));
}

const removeLocalUser = async () => {
    return localStorage.removeItem('therapy');
}

const initialState = {
    loading: false,
    user: getLocalUser() || [],
    error: '',
};

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    try {
        const { data } = await (axios.get(getUserURL));
        setLocalUser(data)
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
});

export const postUser = createAsyncThunk('user/postUser', async (therapistData) => {
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
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
});

export const deleteUser = createAsyncThunk('therapy/deleteUser', async (deleteID) => {
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
        return response;
        removeLocalUser()
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
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';
                state.user = action.payload.user;
            })
            .addCase(fetchUser.rejected, (state) => {
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
