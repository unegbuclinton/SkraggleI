import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addCloneEvents,
  addEvents,
  deleteEvent,
  getArchivedEvents,
  getEventById,
  getEvents,
  updateEventById
} from 'api/events/events';
import { addCloneField, addField, deleteField, getField, updateFieldById } from 'api/events/fields';
import {
  addClonePackages,
  addPackages,
  deletePackages,
  getPackageInfo,
  getPackages,
  updatePackage
} from 'api/events/packages';
import {
  addPromoCode,
  deletePromoCode,
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
  archivedEvents: [],
  allFields: [],
  packageInfoData: []
};

export const createEvents = createAsyncThunk('events/createEvents', addEvents);
export const getAllEvents = createAsyncThunk('events/getAllEvents', getEvents);
export const getAllArchivedEvents = createAsyncThunk(
  'events/getAllArchivedEvents',
  getArchivedEvents
);
export const getEachEvent = createAsyncThunk('events/getEachEvent', getEventById);
export const updateEvent = createAsyncThunk('events/updateEvent', updateEventById);
export const createPromoCode = createAsyncThunk('events/createPromoCode,', addPromoCode);
export const getAllPromoCode = createAsyncThunk('events/getAllPromoCode', getPromoCode);
export const getEachPromoCode = createAsyncThunk('events/getEachPromoCode', getPromoCodeById);
export const updatePromoCode = createAsyncThunk('events/updatePromoCode', updatePromoCodeById);
export const createPackages = createAsyncThunk('events/createPackages,', addPackages);
export const getAllPackages = createAsyncThunk('events/getAllPackages', getPackages);
export const cloneEvent = createAsyncThunk('events/cloneEvent', addCloneEvents);
export const clonePackage = createAsyncThunk('events/clonePackage', addClonePackages);

export const packageInfo = createAsyncThunk('events/packageInfo', getPackageInfo);

export const packageUpdate = createAsyncThunk('events/packageUpdate', updatePackage);

export const cloneField = createAsyncThunk('events/cloneField', addCloneField);

export const createField = createAsyncThunk('events/createField', addField);
export const getAllFields = createAsyncThunk('events/getAllFields', getField);
export const updateField = createAsyncThunk('events/updateField', updateFieldById);
export const delField = createAsyncThunk('events/delField', deleteField);
export const delEvent = createAsyncThunk('events/delEvent', deleteEvent);
export const delPackage = createAsyncThunk('events/delPackage', deletePackages);
export const delPromoCode = createAsyncThunk('events/delPromoCode', deletePromoCode);

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
    [cloneEvent.pending]: (state) => {
      state.isLoading = true;
    },
    [cloneEvent.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [cloneEvent.rejected]: (state) => {
      state.isLoading = false;
    },

    [getAllArchivedEvents.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllArchivedEvents.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.archivedEvents = action.payload;
    },
    [getAllArchivedEvents.rejected]: (state) => {
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
    [cloneField.pending]: (state) => {
      state.isLoading = true;
    },
    [cloneField.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [cloneField.rejected]: (state) => {
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
    [packageInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [packageInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.packageInfoData = action.payload;
    },
    [packageInfo.rejected]: (state) => {
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

    [packageUpdate.pending]: (state) => {
      state.isLoading = true;
    },
    [packageUpdate.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.packageInfoData = action.payload;
    },
    [packageUpdate.rejected]: (state) => {
      state.isLoading = false;
    },

    [getEachPromoCode.pending]: (state) => {
      state.isLoading = true;
    },
    [getEachPromoCode.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
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
    },
    [clonePackage.pending]: (state) => {
      state.isLoading = true;
    },
    [clonePackage.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [clonePackage.rejected]: (state) => {
      state.isLoading = false;
    }
  }
});

export default eventSlice.reducer;
