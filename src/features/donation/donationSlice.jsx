import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOneTimeTransaction } from 'api/donation/OneTimeTransaction';
import { allPledge, createPledge, deletePledge } from '../../api/donation/pledge';

const initialState = {
  isLoading: false,
  pledgeData: [],
  oneTimeData: []
};
export const getPledge = createAsyncThunk('getPledge', allPledge);
export const addPledge = createAsyncThunk('addPledge', createPledge);
export const removePledge = createAsyncThunk('removePledge', deletePledge);

export const getOneTimeTransaction = createAsyncThunk(
  'getOneTimeTransaction',
  createOneTimeTransaction
);

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
    },
    [removePledge.pending]: (state) => {
      state.isLoading = true;
    },
    [removePledge.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [removePledge.rejected]: (state) => {
      state.isLoading = false;
    },
    [getOneTimeTransaction.pending]: (state) => {
      state.isLoading = true;
    },
    [getOneTimeTransaction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.oneTimeData = action.payload;
    },
    [getOneTimeTransaction.rejected]: (state) => {
      state.isLoading = false;
    }
  }
});

export default donationSlice.reducer;
