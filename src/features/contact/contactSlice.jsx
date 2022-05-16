import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from 'api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  createCompany: false,
  isLoading: false
};

export const createNewCompany = createAsyncThunk('auth/register', async (body) => {
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
    }
  }
});

export default contactSlice.reducer;
