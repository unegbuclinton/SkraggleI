import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getElements } from 'api/elements';
import { logoutUser } from 'features/auth/authSlice';

const initialState = {
  elements: [],
  isLoading: false
};

export const getAllElements = createAsyncThunk('element/getAllElements', getElements);

export const elementSlice = createSlice({
  name: 'element',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllElements.fulfilled]: (state, action) => {
      state.elements = action.payload;
      state.isLoading = false;
    },
    [getAllElements.rejected]: (state) => {
      state.isLoading = false;
    },
    [getAllElements.pending]: (state) => {
      state.isLoading = true;
    },
    [logoutUser.fulfilled]: () => {
      return initialState;
    }
  }
});

export default elementSlice.reducer;
