import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addMailBlast } from 'api/mailblast/mailblasts';

const initialState = {
  isLoading: false
};

export const createNewMailBlast = createAsyncThunk('mailBlast/createNewMailBlast', addMailBlast);

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
    }
  }
});

export default mailBlastSlice.reducer;
