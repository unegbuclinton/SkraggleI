import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addContact, allContacts } from 'api/contacts/contacts';
import { addHousehold, getAllHouseHold } from 'api/contacts/household';

const initialState = {
  contactCreated: false,
  contactData: []
};

export const createContact = createAsyncThunk('contact/createContact', addContact);

export const viewContact = createAsyncThunk('contact/viewContact', allContacts);

export const allHouseHold = createAsyncThunk('contact/allHouseHold', getAllHouseHold);
export const createHouseHold = createAsyncThunk('contact/houseHold', addHousehold);

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
