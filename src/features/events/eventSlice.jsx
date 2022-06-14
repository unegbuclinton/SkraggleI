import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addEvents, getEventById, getEvents, updateEventById } from 'api/events/events';
import { addField, deleteField, getField, updateFieldById } from 'api/events/fields';
import { addPackages, getPackages } from 'api/events/packages';
import {
  addPromoCode,
  getPromoCode,
  getPromoCodeById,
  updatePromoCodeById
} from 'api/events/promoCode';
import { logoutUser } from 'features/auth/authSlice';

const initialState = {
  isLoading: false,
  allEvents: [],
  allPromoCode: [],
  allPackages: [],
  eachPromoCode: [],
  eachEvent: [],
  allFields: []
};

export const createEvents = createAsyncThunk('events/createEvents', addEvents);
export const getAllEvents = createAsyncThunk('events/getAllEvents', getEvents);
export const getEachEvent = createAsyncThunk('events/getEachEvent', getEventById);
export const updateEvent = createAsyncThunk('events/updateEvent', updateEventById);
export const createPromoCode = createAsyncThunk('events/createPromoCode,', addPromoCode);
export const getAllPromoCode = createAsyncThunk('events/getAllPromoCode', getPromoCode);
export const getEachPromoCode = createAsyncThunk('events/getEachPromoCode', getPromoCodeById);
export const updatePromoCode = createAsyncThunk('events/getEachPromoCode', updatePromoCodeById);
export const createPackages = createAsyncThunk('events/createPackages,', addPackages);
export const getAllPackages = createAsyncThunk('events/getAllPackages', getPackages);

export const createField = createAsyncThunk('events/createField', addField);
export const getAllFields = createAsyncThunk('events/getAllFields', getField);
export const updateField = createAsyncThunk('events/updateField', updateFieldById);
export const delField = createAsyncThunk('events/delField', deleteField);

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
    },

    [getEachPromoCode.pending]: (state) => {
      state.isLoading = true;
    },
    [getEachPromoCode.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.eachPromoCode = action.payload;
    },
    [getEachPromoCode.rejected]: (state) => {
      state.isLoading = false;
    },

    [updatePromoCode.pending]: (state) => {
      state.isLoading = true;
    },
    [updatePromoCode.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [updatePromoCode.rejected]: (state) => {
      state.isLoading = false;
    },

    [getEachEvent.pending]: (state) => {
      state.isLoading = true;
    },
    [getEachEvent.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.eachEvent = action.payload;
    },
    [getEachEvent.rejected]: (state) => {
      state.isLoading = false;
    },

    [updateEvent.pending]: (state) => {
      state.isLoading = true;
    },
    [updateEvent.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [updateEvent.rejected]: (state) => {
      state.isLoading = false;
    },

    [createField.pending]: (state) => {
      state.isLoading = true;
    },
    [createField.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [createField.rejected]: (state) => {
      state.isLoading = false;
    },

    [getAllFields.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllFields.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allFields = action.payload;
    },
    [getAllFields.rejected]: (state) => {
      state.isLoading = false;
    },

    [updateField.pending]: (state) => {
      state.isLoading = true;
    },
    [updateField.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [updateField.rejected]: (state) => {
      state.isLoading = false;
    },

    [delField.pending]: (state) => {
      state.isLoading = true;
    },
    [delField.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [delField.rejected]: (state) => {
      state.isLoading = false;
    },

    [logoutUser.fulfilled]: () => {
      return initialState;
    }
  }
});

export default eventSlice.reducer;
