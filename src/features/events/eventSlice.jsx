import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addEvents, getEvents } from 'api/events/events';
import { addPackages, getPackages } from 'api/events/packages';
import { addPromoCode, getPromoCode } from 'api/events/promoCode';

const initialState = {
  isLoading: false,
  allEvents: [],
  allPromoCode: [],
  allPackages: []
};

export const createEvents = createAsyncThunk('events/createEvents', addEvents);
export const getAllEvents = createAsyncThunk('events/getAllEvents', getEvents);
export const createPromoCode = createAsyncThunk('events/createPromoCode,', addPromoCode);
export const getAllPromoCode = createAsyncThunk('events/getAllPromoCode', getPromoCode);
export const createPackages = createAsyncThunk('events/createPackages,', addPackages);
export const getAllPackages = createAsyncThunk('events/getAllPackages', getPackages);

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: {
    [createEvents.pending]: (state) => {
      state.isLoading = true;
    },
    [createEvents.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [createEvents.rejected]: (state) => {
      state.isLoading = false;
    },
    [getAllEvents.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllEvents.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allEvents = action.payload;
    },
    [getAllEvents.rejected]: (state) => {
      state.isLoading = false;
    },
    [createPromoCode.pending]: (state) => {
      state.isLoading = true;
    },
    [createPromoCode.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [createPromoCode.rejected]: (state) => {
      state.isLoading = false;
    },
    [getAllPromoCode.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllPromoCode.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allPromoCode = action.payload;
    },
    [getAllPromoCode.rejected]: (state) => {
      state.isLoading = false;
    },

    [createPackages.pending]: (state) => {
      state.isLoading = true;
    },
    [createPackages.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [createPackages.rejected]: (state) => {
      state.isLoading = false;
    },
    [getAllPackages.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllPackages.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allPackages = action.payload;
    },
    [getAllPackages.rejected]: (state) => {
      state.isLoading = false;
    }
  }
});

export default eventSlice.reducer;
