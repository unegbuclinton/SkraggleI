import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from 'api/index';

export const contactHouseHold = createAsyncThunk('contact/houseHold', (body) => {
  try {
    return apiInstance({
      method: 'post',
      url: '/households/add',
      data: body
    });
  } catch (error) {
    console.log(error);
  }
});

export const createContact = createAsyncThunk('contact/createContact', (body) => {
  try {
    return apiInstance({
      method: 'post',
      url: '/contacts/create',
      data: body
    });
  } catch (error) {
    console.log(error);
  }
});

export const viewContact = createAsyncThunk('contact/viewContact', (body) => {
  try {
    return apiInstance({
      method: 'get',
      url: '/contacts/all/1',
      data: body
    });
  } catch (error) {
    console.log(error);
  }
});

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    isSuccess: false,
    contactCreated: false,
    viewContacts: ''
  },

  reducers: {},

  extraReducers: {
    // [contactHouseHold.fulfilled]: (state) => {
    //   state.isSuccess = true;
    // },

    // [contactHouseHold.rejected]: (state) => {
    //   state.isSuccess = false;
    // },

    // //CREATE CONTACT
    // [createContact.fulfilled]: (state) => {
    //   state.contactCreated = true;
    // },

    // [createContact.rejected]: (state) => {
    //   state.contactCreated = false;
    // },

    //VIEW CONTACTS
    [viewContact.fulfilled]: (state, action) => {
      state.viewContacts = action.payload;
    },

    [viewContact.rejected]: (state, action) => {
      state.viewContacts = action.payload;
    }
  }
});

export default contactSlice.reducer;
