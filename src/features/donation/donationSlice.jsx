import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createOneTimeTransaction,
  getAllOneTimeTransaction
} from 'api/donation/OneTimeTransaction';
import {
  createRecurringTransaction,
  getAllRecurringTransaction
} from 'api/donation/RecurringTransaction';
import { allPledge, createPledge, deletePledge } from '../../api/donation/pledge';

const initialState = {
  isLoading: false,
  pledgeData: [],
  oneTimeData: [],
  recurringData: []
};
export const getPledge = createAsyncThunk('getPledge', allPledge);
export const addPledge = createAsyncThunk('addPledge', createPledge);
export const removePledge = createAsyncThunk('removePledge', deletePledge);

export const addOneTimeTransaction = createAsyncThunk(
  'addOneTimeTransaction',
  createOneTimeTransaction
);

export const getOneTimeTransaction = createAsyncThunk(
  'getOneTimeTransaction',
  getAllOneTimeTransaction
);

export const addRecurringTransaction = createAsyncThunk(
  'addRecurringTransaction',
  createRecurringTransaction
);

export const getRecurringTransaction = createAsyncThunk(
  'getRecurringTransaction',
  getAllRecurringTransaction
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
    [addOneTimeTransaction.pending]: (state) => {
      state.isLoading = true;
    },
    [addOneTimeTransaction.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [addOneTimeTransaction.rejected]: (state) => {
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
    },

    [addRecurringTransaction.pending]: (state) => {
      state.isLoading = true;
    },
    [addRecurringTransaction.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [addRecurringTransaction.rejected]: (state) => {
      state.isLoading = false;
    },
    [getRecurringTransaction.pending]: (state) => {
      state.isLoading = true;
    },
    [getRecurringTransaction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.recurringData = action.payload;
    },
    [getRecurringTransaction.rejected]: (state) => {
      state.isLoading = false;
    }
  }
});

export default donationSlice.reducer;
