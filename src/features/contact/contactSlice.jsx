import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCompanies, getCompanies } from 'api/contacts/company';
import { addContact, allContacts } from 'api/contacts/contacts';
import { addHousehold, getAllHouseHold } from 'api/contacts/household';
import { companiesSearch, contactSearch } from 'api/contacts/search';
import request from 'apiInstance';

const initialState = {
  companies: [],
  isLoading: false,
  contactCreated: false,
  houseHolds: [],
  contactData: []
};

export const createContact = createAsyncThunk('contact/createContact', addContact);
export const viewContact = createAsyncThunk('contact/viewContact', allContacts);
export const getAllCompanies = createAsyncThunk('contact/getAllCompanies', getCompanies);
export const createNewCompany = createAsyncThunk('contact/createCompany', addCompanies);
export const allHouseHold = createAsyncThunk('contact/allHouseHold', getAllHouseHold);
export const createHouseHold = createAsyncThunk('contact/houseHold', addHousehold);

//search
export const searchContact = createAsyncThunk('contact/searchContact', contactSearch);
export const searchCompanies = createAsyncThunk('contact/searchCompanies', companiesSearch);
// export const searchHouseHold = createAsyncThunk('contact/searchHouseHold', houseHoldSearch);

export const searchHouseHold = createAsyncThunk(
  'contact/houseHoldSearch',
  async (search, page = 0) => {
    try {
      const response = await request({
        method: 'get',
        url: `households/search?search_string=${search}&page=${page}`
      });
      console.log(response.data.message);
      return response?.data?.message;
    } catch (error) {
      return error;
    }
  }
);

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: {
    //CREATE CONTACT
    [createContact.fulfilled]: (state) => {
      state.contactCreated = true;
    },

    [createContact.rejected]: (state) => {
      state.contactCreated = false;
    },
    //VIEW CONTACTS
    [viewContact.fulfilled]: (state, action) => {
      state.contactData = action.payload;
    },
    [viewContact.rejected]: (state, action) => {
      state.contactData = action.payload;
    },

    [createNewCompany.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [createNewCompany.rejected]: (state) => {
      state.isLoading = false;
      state.createCompany = false;
    },
    [createNewCompany.pending]: (state) => {
      state.isLoading = true;
    },

    [getAllCompanies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.companies = action.payload;
    },
    [getAllCompanies.rejected]: (state) => {
      state.isLoading = false;
      state.createCompany = false;
    },
    [getAllCompanies.pending]: (state) => {
      state.isLoading = true;
    },
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
    },
    [searchContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contactData = action.payload;
    },
    [searchCompanies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.companies = action.payload;
    },
    [searchHouseHold.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.isLoading = false;
      state.houseHolds = action.payload;
    }
  }
});

export default contactSlice.reducer;
