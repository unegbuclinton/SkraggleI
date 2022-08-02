import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getActivities } from 'api/donation/fundraisingActivities';
import { getDonationHistory, getRevenueHistory } from 'api/donation/fundraisingHistory';
import { getRevenueGoal } from 'api/donation/goalMetrics';
import { getKpiOptions } from 'api/donation/kpiList';
import {
  createOneTimeTransaction,
  deleteOneTimeTransaction,
  getAllOneTimeTransaction
} from 'api/donation/OneTimeTransaction';
import {
  createRecurringTransaction,
  deleteRecurringTransaction,
  getAllRecurringTransaction
} from 'api/donation/RecurringTransaction';
import { allPledge, createPledge, deletePledge } from '../../api/donation/pledge';

const initialState = {
  isLoading: false,
  pledgeData: [],
  oneTimeData: [],
  recurringData: [],
  kpiData: [],
  fundraisingActivity: [],
  revenueData: [],
  donationHistory: [],
  RevenueHistory: []
};
export const getPledge = createAsyncThunk('donation/getPledge', allPledge);
export const addPledge = createAsyncThunk('donation/addPledge', createPledge);
export const removePledge = createAsyncThunk('donation/removePledge', deletePledge);
export const kpiOptions = createAsyncThunk('donation/kpiOptions', getKpiOptions);
export const revenueGoal = createAsyncThunk('donation/revenueGoal', getRevenueGoal);
export const fundActivities = createAsyncThunk('donation/fundActivities', getActivities);

export const donationHistory = createAsyncThunk('donation/donationHistory', getDonationHistory);

export const revenueHistory = createAsyncThunk('donation/RevenueHistory', getRevenueHistory);

export const removeTransaction = createAsyncThunk(
  'donation/removeTransaction',
  deleteOneTimeTransaction
);
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
export const removeRecurring = createAsyncThunk(
  'donation/removeRecurring',
  deleteRecurringTransaction
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
    [addPledge.pending]: (state) => {
      state.isLoading = true;
    },
    [addPledge.rejected]: (state) => {
      state.isLoading = false;
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
    [removeTransaction.fulfilled]: (state) => {
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
    [removeRecurring.fulfilled]: (state) => {
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
    },
    [fundActivities.pending]: (state) => {
      state.isLoading = true;
    },
    [fundActivities.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.fundraisingActivity = action.payload;
    },
    [fundActivities.rejected]: (state) => {
      state.isLoading = false;
    },
    [kpiOptions.pending]: (state) => {
      state.isLoading = true;
    },
    [kpiOptions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.kpiData = action.payload;
    },
    [kpiOptions.rejected]: (state) => {
      state.isLoading = false;
    },
    [revenueGoal.pending]: (state) => {
      state.isLoading = true;
    },
    [revenueGoal.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.revenueData = action.payload;
    },
    [revenueGoal.rejected]: (state) => {
      state.isLoading = false;
    },
    [donationHistory.pending]: (state) => {
      state.isLoading = true;
    },
    [donationHistory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.donationHistory = action.payload;
    },
    [revenueHistory.pending]: (state) => {
      state.isLoading = true;
    },
    [revenueHistory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.RevenueHistory = action.payload;
    }
  }
});

export default donationSlice.reducer;
