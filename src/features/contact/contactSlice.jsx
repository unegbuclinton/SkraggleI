import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCompanies, getCompanies } from 'api/contacts/company';
import { allInteractions, createInteractions } from 'api/contacts/contact-subTab/interactions';
import { editContact } from 'api/contacts/contact-subTab/profile';
import { addContact, allContacts, eachContact } from 'api/contacts/contacts';
import { addHousehold, getAllHouseHold } from 'api/contacts/household';
import { companiesSearch, contactSearch, houseHoldSearch } from 'api/contacts/search';
import { addTags, allTags } from 'api/contacts/tags';
import { logoutUser } from 'features/auth/authSlice';

const initialState = {
  companies: [],
  isLoading: false,
  contactCreated: false,
  tagsCreated: false,
  houseHolds: [],
  contactData: [],
  tagsData: [],
  eachContact: [],
  interactionData: []
};

export const createContact = createAsyncThunk('contact/createContact', addContact);
export const viewContact = createAsyncThunk('contact/viewContact', allContacts);
export const getAllCompanies = createAsyncThunk('contact/getAllCompanies', getCompanies);
export const createNewCompany = createAsyncThunk('contact/createCompany', addCompanies);
export const allHouseHold = createAsyncThunk('contact/allHouseHold', getAllHouseHold);
export const createHouseHold = createAsyncThunk('contact/houseHold', addHousehold);
export const createTags = createAsyncThunk('contact/createTags', addTags);
export const viewTags = createAsyncThunk('contact/viewTags', allTags);
export const oneContact = createAsyncThunk('contact/oneConact', eachContact);
export const getInteraction = createAsyncThunk('contact/getInteraction', createInteractions);

export const updateContact = createAsyncThunk('contact/updateContact', editContact);
export const getAllInteractions = createAsyncThunk('getAllInteractions', allInteractions);

//search
export const searchContact = createAsyncThunk('contact/searchContact', contactSearch);
export const searchCompanies = createAsyncThunk('contact/searchCompanies', companiesSearch);
export const searchHouseHold = createAsyncThunk('contact/searchHouseHold', houseHoldSearch);

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

    //CREATE TAGS
    [createTags.fulfilled]: (state) => {
      state.tagsCreated = true;
    },

    [createTags.rejected]: (state) => {
      state.tagsCreated = false;
    },

    //VIEW TAGS
    [viewTags.fulfilled]: (state, action) => {
      state.tagsData = action.payload;
    },
    [viewTags.rejected]: (state, action) => {
      state.tagsData = action.payload;
    },
    [oneContact.fulfilled]: (state, action) => {
      state.eachContact = action.payload;
    },
    [updateContact.fulfilled]: (state, action) => {
      state.eachContact = action.payload;
    },
    [getAllInteractions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.interactionData = action.payload;
    },
    // [searchContact.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.contactData = action.payload;
    // },
    // [searchCompanies.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.companies = action.payload;
    // },
    // [searchHouseHold.fulfilled]: (state, action) => {
    //   state.houseHolds = action.payload;
    // },
    [logoutUser.fulfilled]: () => {
      return initialState;
    }
  }
});

export default contactSlice.reducer;
