import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addForms, getForms } from 'api/forms/forms';

const initialState = {
  isLoading: false,
  allForm: []
};

export const createForm = createAsyncThunk('form/createForm', addForms);
export const getAllForm = createAsyncThunk('form/getAllForm', getForms);

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
    }
  }
});

export default formsSlice.reducer;
