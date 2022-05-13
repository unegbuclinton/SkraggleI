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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    [loginUser.rejected]: (state) => {
      state.isAuthenticated = false;
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
