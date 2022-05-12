import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from 'api';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  isAuthenticated: false,
  isRegistered: false,
  token: null,
  isLoading: false,
  isError: false,
  errorMessage: ''
};

export const registerUser = createAsyncThunk('auth/register', async (body) => {
  const response = await apiInstance.post('/admin/signup', body);
  return response.data;
});

export const loginUser = createAsyncThunk('auth/login', async ({ email, password }) => {
  try {
    const response = await apiInstance.post('/admin/login', { email, password });
    return response.data;
  } catch (error) {
    console.log('Error', error.response.data);
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
    [registerUser.rejected]: (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload);
    },
    [registerUser.pending]: (state) => {
      // Add user to the state array
      state.isLoading = true;
      // state.entities.push(action.payload);
    },

    [loginUser.fulfilled]: (state, { payload }) => {
      state.isAuthenticated = true;
      state.token = payload.token;
      state.isLoading = false;
    },
    [loginUser.rejected]: (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload);
      state.isLoading = false;
    },
    [loginUser.pending]: (state) => {
      // Add user to the state array
      state.isLoading = true;
      // state.entities.push(action.payload);
    }
  }
});

export default authSlice.reducer;
