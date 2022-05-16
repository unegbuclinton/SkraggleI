import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from 'api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  createCompany: false,
  isLoading: false,
  isSuccess: false
};

export const createNewCompany = createAsyncThunk('auth/register', async (body) => {
  try {
    // localStorage.removeItem('persist:root');
    const response = await apiInstance({
      method: 'post',
      url: '/company/add',
      data: body
    });
    return response.data;
  } catch (error) {
    toast.error('cants add new company');
  }
});

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: {
    [createNewCompany.fulfilled]: (state, action) => {
      state.createCompany = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    [createNewCompany.rejected]: (state) => {
      state.isLoading = false;
      state.createCompany = false;
      state.isSuccess = false;
    },
    [createNewCompany.pending]: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      // state.entities.push(action.payload);
    }
  }
});

export default contactSlice.reducer;
