import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { houseHoldSearch } from 'api/contacts/Search';

initialState = {
  gethouseHoldSearch: []
};

export const searchHousehold = createAsyncThunk('contact/searchHousehold', houseHoldSearch);

export const contactSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},

  extraReducers: {
    [searchHousehold.fulfilled]: (state, action) => {
      state.gethouseHoldSearch = action.payload;
    }
  }
});
