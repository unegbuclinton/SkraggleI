import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addHousehold, getAllHouseHold } from 'api/contacts/household';

const initialState = {
  contactCreated: false,
  contactData: null
};

export const createHouseHold = createAsyncThunk('contact/houseHold', addHousehold);

export const allHouseHold = createAsyncThunk('contact/allHouseHold', getAllHouseHold);

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},

  extraReducers: {
    [createHouseHold.fulfilled]: (state) => {
      state.isSuccess = true;
    },

    [createHouseHold.rejected]: (state) => {
      state.isSuccess = false;
    },
    [allHouseHold.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.houseHolds = action.payload;
    },

    [allHouseHold.rejected]: (state) => {
      state.isLoading = false;
    }
  }
});

export default contactSlice.reducer;
