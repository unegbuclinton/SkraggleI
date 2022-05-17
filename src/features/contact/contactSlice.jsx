import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addContact, allContacts } from 'api/contacts/contacts';

const initialState = {
  contactCreated: false,
  contactData: []
};

export const createContact = createAsyncThunk('contact/createContact', addContact);

export const viewContact = createAsyncThunk('contact/viewContact', allContacts);

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
    }
  }
});

export default contactSlice.reducer;
