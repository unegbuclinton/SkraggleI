import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from 'api/index';
import { toast } from 'react-toastify';

const initialState = {
  contactCreated: false,
  contactData: null
};

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

export const createContact = createAsyncThunk('contact/createContact', async (body) => {
  try {
    const createContactResponse = await apiInstance({
      method: 'post',
      url: '/contacts/create',
      data: body
    });
    toast.done('Contact created successfully');
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
    [contactHouseHold.fulfilled]: (state) => {
      state.isSuccess = true;
    },

    [contactHouseHold.rejected]: (state) => {
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
