import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from 'apiInstance';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  isAuthenticated: false,
  isRegistered: false,
  token: null,
  isLoading: false,
  isError: false,
  errorMessage: '',
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
    return response?.data.message;
  } catch (error) {
    toast.error('username or password is incorrect');
  }
});

export const resendVerification = createAsyncThunk('auth/resendVerification', async (body) => {
  const response = await apiInstance.post('/email/verification/send', body);
  return response?.data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.isRegistered = action.payload;
      state.isLoading = false;
    },
    [registerUser.rejected]: (state) => {
      state.isLoading = false;
      state.isRegistered = false;
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
    [resendVerification.fulfilled]: (state, action) => {
      state.isSend = action.payload;
    },
    [resendVerification.rejected]: (state) => {
      state.isSend = false;
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
