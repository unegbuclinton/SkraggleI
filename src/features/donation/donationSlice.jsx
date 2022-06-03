import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { allPledge } from 'api/donation/pledge';

const initialState = {
  isLoading: false,
  pledgeData: null
};
export const getPledge = createAsyncThunk('getPledge', allPledge);
export const donationSlice = createSlice({
  name: 'donation',
  initialState,
  reducers: {},
  extraReducers: {
    [getPledge.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.pledgeData = action.payload;
    }
  }
});

export default donationSlice.reducer;
