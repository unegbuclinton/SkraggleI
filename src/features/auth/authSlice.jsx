import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from 'api';

export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (body) => {
  try {
    return await apiInstance({
      method: 'post',
      url: '/admin/forgot-password',
      data: body
    });
  } catch (error) {
    console.log(error);
  }
});

export const loginUser = createAsyncThunk('auth/loginUser', async (body) => {
  try {
    return await apiInstance({
      method: 'post',
      url: '/admin/login',
      data: body
    });
  } catch (error) {
    console.log(error);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: null,
    mail: ''
  },
  reducers: {},

  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    [loginUser.rejected]: (state) => {
      state.isAuthenticated = false;
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

export const { login, register, resendVerification } = authSlice.actions;

export default authSlice.reducer;
