import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addForms, deleteForm, getForms, individualForm } from 'api/forms/forms';

const initialState = {
  isLoading: false,
  allForm: [],
  formsByID: []
};

export const createForm = createAsyncThunk('form/createForm', addForms);
export const getAllForm = createAsyncThunk('form/getAllForm', getForms);
export const getSingleForm = createAsyncThunk('form/getSingleForm', individualForm);
export const deleteSingleForm = createAsyncThunk('campaign/removeCampaign', deleteForm);

export const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {},
  extraReducers: {
    [createForm.pending]: (state) => {
      state.isLoading = true;
    },
    [createForm.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [createForm.rejected]: (state) => {
      state.isLoading = false;
    },
    [getAllForm.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllForm.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allForm = action.payload;
    },
    [getAllForm.rejected]: (state) => {
      state.isLoading = false;
    },
    [getSingleForm.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.formsByID = action.payload;
    },
    [getSingleForm.rejected]: (state) => {
      state.isLoading = false;
    },
    [deleteSingleForm.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [deleteSingleForm.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteSingleForm.rejected]: (state) => {
      state.isLoading = false;
    }
  }
});

export default formsSlice.reducer;
