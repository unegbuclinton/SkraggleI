import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addForms, deleteForm, getForms, individualForm } from 'api/forms/forms';

const initialState = {
  isLoading: false,
  allForm: [],
  formsByID: []
};

export const createForm = createAsyncThunk('forms/createForm', addForms);
export const getAllForm = createAsyncThunk('forms/getAllForm', getForms);
export const removeForm = createAsyncThunk('forms/removeForm', deleteForm);
export const getSingleForm = createAsyncThunk('forms/getSingleForm', individualForm);

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
    [removeForm.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [removeForm.pending]: (state) => {
      state.isLoading = true;
    },
    [removeForm.rejected]: (state) => {
      state.isLoading = false;
    },
    [getSingleForm.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.formsByID = action.payload;
    },
    [getSingleForm.rejected]: (state) => {
      state.isLoading = false;
    }
  }
});

export default formsSlice.reducer;
