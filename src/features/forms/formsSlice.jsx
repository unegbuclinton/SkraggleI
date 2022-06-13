import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addForms, deleteForm, getForms } from 'api/forms/forms';

const initialState = {
  isLoading: false,
  allForm: []
};

export const createForm = createAsyncThunk('form/createForm', addForms);
export const getAllForm = createAsyncThunk('form/getAllForm', getForms);
export const removeForm = createAsyncThunk('campaign/removeCampaign', deleteForm);

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
      console.log(action.payload);
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
    }
  }
});

export default formsSlice.reducer;
