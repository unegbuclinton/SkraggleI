import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { allPledge, createPledge } from '../../api/donation/pledge';

const initialState = {
  isLoading: false,
  pledgeData: []
};
export const getPledge = createAsyncThunk('getPledge', allPledge);
export const addPledge = createAsyncThunk('addPledge', createPledge);

export const donationSlice = createSlice({
  name: 'donation',
  initialState,
  reducers: {},
  extraReducers: {
    [getPledge.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.pledgeData = action.payload;
    },
    [getPledge.rejected]: (state, action) => {
      state.isLoading = true;
      state.pledgeData = action.payload;
    },
    [addPledge.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.pledgeData = action.payload;
    },
    [addPledge.rejected]: (state, action) => {
      state.isLoading = true;
      state.pledgeData = action.payload;
    }
  }
});

export default donationSlice.reducer;
