import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addMailBlast,
  deleteMailBlast,
  listMailBlast,
  mailBlastById
} from 'api/mailblast/mailblasts';
import { getSubscriptionStatus } from 'api/mailblast/subscriptionStatus';

const initialState = {
  mailBlastDatas: [],
  subscriptionStatus: [],
  eachMailBlast: [],
  isLoading: false
};

export const createNewMailBlast = createAsyncThunk('mailBlast/createNewMailBlast', addMailBlast);
export const listAllMailBlast = createAsyncThunk('mailBlast/listAllMailBlast', listMailBlast);
export const removeMailBlast = createAsyncThunk('mailBlast/removeMailBlast', deleteMailBlast);
export const getMailblastById = createAsyncThunk('mailBlast/getMailblastById', mailBlastById);
export const allSubscriptionStatus = createAsyncThunk(
  'mailBlast/getSubscriptionStatus',
  getSubscriptionStatus
);
export const mailBlastSlice = createSlice({
  name: 'mailBlast',
  initialState,
  reducers: {},
  extraReducers: {
    [createNewMailBlast.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [createNewMailBlast.rejected]: (state) => {
      state.isLoading = false;
    },
    [createNewMailBlast.pending]: (state) => {
      state.isLoading = true;
    },
    [listAllMailBlast.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.mailBlastDatas = action.payload;
    },
    [listAllMailBlast.rejected]: (state) => {
      state.isLoading = false;
    },
    [listAllMailBlast.pending]: (state) => {
      state.isLoading = true;
    },
    [removeMailBlast.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [removeMailBlast.rejected]: (state) => {
      state.isLoading = false;
    },
    [removeMailBlast.pending]: (state) => {
      state.isLoading = true;
    },
    [allSubscriptionStatus.pending]: (state) => {
      state.isLoading = true;
    },
    [allSubscriptionStatus.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.subscriptionStatus = action.payload;
    },
    [allSubscriptionStatus.rejected]: (state) => {
      state.isLoading = false;
    },

    [getMailblastById.pending]: (state) => {
      state.isLoading = true;
    },
    [getMailblastById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.eachMailBlast = action.payload;
    },
    [getMailblastById.rejected]: (state) => {
      state.isLoading = false;
    }
  }
});

export default mailBlastSlice.reducer;
