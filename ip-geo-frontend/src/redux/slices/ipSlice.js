// slices/ipSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGeoInfo = createAsyncThunk('ip/fetchGeoInfo', async (ip) => {
  const response = await axios.get(`http://localhost:3001/ip/${ip}`);
  return response.data;
});

export const fetchHistory = createAsyncThunk('ip/fetchHistory', async () => {
  const response = await axios.get('http://localhost:3001/ip/history');
  return response.data;
});

const ipSlice = createSlice({
  name: 'ip',
  initialState: { geoInfo: null, history: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGeoInfo.fulfilled, (state, action) => {
      state.geoInfo = action.payload;
    });
    builder.addCase(fetchHistory.fulfilled, (state, action) => {
      state.history = action.payload;
    });
  }
});

export default ipSlice.reducer;
