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
  isSend: false
};

export const registerUser = createAsyncThunk('auth/register', async (body) => {
  try {
    // localStorage.removeItem('persist:root');
    const response = await apiInstance({
      method: 'post',
      url: '/admin/signup',
      data: body
    });
    return response.data.message;
  } catch (error) {
    toast.error('User already exists');
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

export const resendVerification = createAsyncThunk('auth/resendVerification', async () => {
  const response = await apiInstance.post('/email/verification/send');
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
    [registerUser.rejected]: (state) => {
      state.isLoading = false;
      state.isRegistered = false;
    },
    [registerUser.pending]: (state) => {
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
    [resendVerification.fulfilled]: (state) => {
      state.isSend = true;
    },
    [resendVerification.rejected]: (state) => {
      state.isSend = false;
    }
  }
});

export default authSlice.reducer;
