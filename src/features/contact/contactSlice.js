import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from 'apiInstance';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  houseHolds: [],
  contactCreated: false
};
export const createHouseHold = createAsyncThunk('contact/houseHold', async (body) => {
  try {
    const response = await apiInstance({
      method: 'post',
      url: '/households/add',
      data: body
    });
    return response?.data;
  } catch (error) {
    toast.error('HouseHold could not be created');
  }
});

export const allHouseHold = createAsyncThunk('contact/allHouseHold', async () => {
  try {
    const response = await apiInstance({
      method: 'get',
      url: 'households/all/1'
    });
    return response?.data.message;
  } catch (error) {
    return error;
  }
});

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

export const viewContact = createAsyncThunk('contact/viewContact', async () => {
  try {
    const contactResponse = await apiInstance({
      method: 'get',
      url: '/contacts/all/1'
    });
    return contactResponse.data.message;
  } catch (error) {
    console.log(error);
  }
});

export const getAllCompanies = createAsyncThunk('contact/getAllCompanies', async () => {
  try {
    const response = await apiInstance({
      method: 'get',
      url: '/company/all/1'
    });
    return response.data.message;
  } catch (error) {
    toast.error();
    console.log(error);
  }
});

export const contactSlice = createSlice({
  name: 'contact',
  initialState,

  reducers: {},

  extraReducers: {
    [createHouseHold.fulfilled]: (state) => {
      state.isLoading = false;
    },

    [createHouseHold.rejected]: (state) => {
      state.isLoading = false;
    },

    [allHouseHold.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.houseHolds = action.payload;
    },

    [allHouseHold.rejected]: (state) => {
      state.isLoading = false;
    },

    [createContact.fulfilled]: (state) => {
      state.contactCreated = true;
    },

    [createContact.rejected]: (state) => {
      state.contactCreated = false;
    },

    [viewContact.fulfilled]: (state, action) => {
      state.contactData = action.payload;
    },

    [viewContact.rejected]: (state, action) => {
      state.contactData = action.payload;
    }
  }
});
export default contactSlice.reducer;
