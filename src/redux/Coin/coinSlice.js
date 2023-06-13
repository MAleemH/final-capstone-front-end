// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const getCoinsURL = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=24';

// const initialState = {
//   loading: false,
//   coins: [],
//   error: '',
// };

// export const fetchCoins = createAsyncThunk('coin/fetchCoins', async () => {
//   const { data } = await (axios.get(getCoinsURL));
//   return data;
// });

// /* eslint-disable no-param-reassign */

// const coinSlice = createSlice({
//   name: 'coin',
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(fetchCoins.pending, (state) => {
//       state.loading = true;
//     })
//       .addCase(fetchCoins.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = '';
//         state.coins = action.payload.coins;
//       })
//       .addCase(fetchCoins.rejected, (state) => {
//         state.loading = false;
//         state.error = '';
//       });
//   },
// });

// /* eslint-disable no-param-reassign */

// export default coinSlice.reducer;
