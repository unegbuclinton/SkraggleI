import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from 'api';

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
    token: null
  },
  reducers: {},

  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    [loginUser.rejected]: (state) => {
      state.isAuthenticated = false;
    }
  }
});

export const { login, register, resendVerification } = authSlice.actions;

export default authSlice.reducer;
