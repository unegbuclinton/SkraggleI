import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from 'api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  companies: [],
  isLoading: false
};

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

export const createNewCompany = createAsyncThunk('contact/createCompany', async (body) => {
  try {
    const response = await apiInstance({
      method: 'post',
      url: '/company/add',
      data: body
    });
    return response.data;
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
      console.log(action.payload);
    },
    [getAllCompanies.rejected]: (state) => {
      state.isLoading = false;
      state.createCompany = false;
    },
    [getAllCompanies.pending]: (state) => {
      state.isLoading = true;
      // state.entities.push(action.payload);
    }
  }
});

export default contactSlice.reducer;
