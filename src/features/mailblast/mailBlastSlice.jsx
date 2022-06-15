import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addMailBlast, deleteMailBlast, listMailBlast } from 'api/mailblast/mailblasts';

const initialState = {
  mailBlastDatas: [],
  isLoading: false
};

export const createNewMailBlast = createAsyncThunk('mailBlast/createNewMailBlast', addMailBlast);
export const listAllMailBlast = createAsyncThunk('mailBlast/listAllMailBlast', listMailBlast);
export const removeMailBlast = createAsyncThunk('mailBlast/removeMailBlast', deleteMailBlast);

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
    }
  }
});

export default mailBlastSlice.reducer;
