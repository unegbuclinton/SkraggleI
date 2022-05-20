import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from 'api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  isAuthenticated: false,
  token: null,
  isLoading: false,
  isSend: false,
  mail: ''
};

export const registerUser = createAsyncThunk('auth/register', async (body) => {
  try {
    const response = await apiInstance({
      method: 'post',
      url: '/admin/signup',
      data: body
    });
    return response.data;
  } catch (error) {
    toast.error('User already exists');
  }
});

export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (body) => {
  try {
    const forgotResponse = await apiInstance({
      method: 'post',
      url: '/admin/forgot-password',
      data: body
    });
    console.log(forgotResponse);
    return forgotResponse.data.message;
  } catch (error) {
    toast.error('No user is found');
  }
});

export const loginUser = createAsyncThunk('auth/loginUser', async (body) => {
  try {
    const response = await apiInstance({
      method: 'post',
      url: '/admin/login',
      data: body
    });
    return response.data.message;
  } catch (error) {
    toast.error('username or password is incorrect');
  }
});

export const resendVerification = createAsyncThunk('auth/resendVerification', async () => {
  const response = await apiInstance.post('/email/verification/send');
  return response.data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [registerUser.rejected]: (state) => {
      state.isLoading = false;
    },
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    [loginUser.rejected]: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },
    [forgotPassword.fulfilled]: (state, action) => {
      state.mail = action.payload;
    },
    [forgotPassword.rejected]: (state, action) => {
      state.mail = action.payload;
    }
  }
});

export default authSlice.reducer;
