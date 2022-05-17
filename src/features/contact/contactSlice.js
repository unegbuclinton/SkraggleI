import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addHousehold } from 'api/contacts/household';
import apiInstance from 'apiInstance';
import { toast } from 'react-toastify';

const initialState = {
  contactCreated: false,
  contactData: null
};

export const createHouseHold = createAsyncThunk('contact/houseHold', addHousehold);

export const createContact = createAsyncThunk('contact/createContact', async (body) => {
  try {
    const createContactResponse = await apiInstance({
      method: 'post',
      url: '/contacts/create',
      data: body
    });
    return createContactResponse;
  } catch (error) {
    toast.error('Contact did not created successfully');
  }
});

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

    //CREATE CONTACT
    [createContact.fulfilled]: (state) => {
      state.contactCreated = true;
    },

    [createContact.rejected]: (state) => {
      state.contactCreated = false;
    }
  }
});

export default contactSlice.reducer;
