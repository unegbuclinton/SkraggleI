import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from 'api';
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
  const response = await apiInstance.post('/admin/signup', body);
  return response.data;
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
    // localStorage.removeItem('persist:root');
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

export const resendVerification = createAsyncThunk('auth/resendVerification', async (body) => {
  const response = await apiInstance.post('/email/verification/send', body);
  return response.data;
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
    [registerUser.rejected]: (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload);
    },
    [registerUser.pending]: (state) => {
      // Add user to the state array
      state.isLoading = true;
      // state.entities.push(action.payload);
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    [loginUser.rejected]: (state) => {
      state.isAuthenticated = false;
    },
    [resendVerification.fulfilled]: (state, action) => {
      state.isSend = action.payload;
    },
    [resendVerification.rejected]: (state) => {
      state.isSend = false;
      state.token = null;
    },
    //Forgot Password Extra Reducers
    [forgotPassword.fulfilled]: (state, action) => {
      state.mail = action.payload;
    },
    [forgotPassword.rejected]: (state, action) => {
      state.mail = action.payload;
    }
  }
});

export default authSlice.reducer;
