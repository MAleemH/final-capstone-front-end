// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   loading: false,
//   markets: [],
//   error: '',
// };

// export const testFetchMarkets = createAsyncThunk('market/fetchMarkets', async () => {
//   const { data } = await (axios.get('https://api.coinstats.app/public/v1/markets?coinId=bitcoin'));
//   return data.slice(0, 24);
// });

// export const fetchMarkets = createAsyncThunk('market/fetchMarkets', async (id) => {
//   const { data } = await (axios.get(`https://api.coinstats.app/public/v1/markets?coinId=${id}`));
//   return data.slice(0, 24);
// });

// /* eslint-disable no-param-reassign */

// const marketSlice = createSlice({
//   name: 'market',
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(fetchMarkets.pending, (state) => {
//       state.loading = true;
//     })
//       .addCase(fetchMarkets.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = '';
//         state.markets = action.payload;
//       })
//       .addCase(fetchMarkets.rejected, (state) => {
//         state.loading = false;
//         state.error = '';
//       });
//   },
// });

// /* eslint-disable no-param-reassign */

// export default marketSlice.reducer;
