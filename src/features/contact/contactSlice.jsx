import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCompanies, getCompanies } from 'api/contacts/company';
import { addHousehold } from 'api/contacts/household';
const initialState = {
  companies: [],
  isLoading: false,
  contactCreated: false,
  contactData: null
};

export const getAllCompanies = createAsyncThunk('contact/getAllCompanies', getCompanies);
export const createNewCompany = createAsyncThunk('contact/createCompany', addCompanies);
export const createHouseHold = createAsyncThunk('contact/houseHold', addHousehold);

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: {
    [createNewCompany.fulfilled]: (state) => {
      // state.createCompany = action.payload;
      state.isLoading = false;
    },
    [createNewCompany.rejected]: (state) => {
      state.isLoading = false;
      state.createCompany = false;
    },
    [createNewCompany.pending]: (state) => {
      state.isLoading = true;
      // state.entities.push(action.payload);
    },

    [getAllCompanies.fulfilled]: (state, action) => {
      // state.createCompany = action.payload;
      state.isLoading = false;
      state.companies = action.payload;
    },
    [getAllCompanies.rejected]: (state) => {
      state.isLoading = false;
      state.createCompany = false;
    },
    [getAllCompanies.pending]: (state) => {
      state.isLoading = true;
      // state.entities.push(action.payload);
    },

    [createHouseHold.fulfilled]: (state) => {
      state.isSuccess = true;
    },

    [createHouseHold.rejected]: (state) => {
      state.isSuccess = false;
    }
  }
});

export default contactSlice.reducer;
