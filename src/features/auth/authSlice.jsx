import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from 'api';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  isAuthenticated: false,
  token: null,
  isLoading: false,
  isError: false,
  errorMessage: ''
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ firstName, lastName, email, password }) => {
    const response = await apiInstance.post('/admin/signup', {
      firstName,
      lastName,
      email,
      password
    });
    return response.data;
  }
);

const loginUser = createAsyncThunk('auth/login', async ({ email, password }) => {
  try {
    const response = await apiInstance.post('/admin/login', { email, password });
    return response.data;
  } catch (error) {
    console.log('Error', error.response.data);
  }
});

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      // state.token = payload.token;
    },
    register: (state, payload) => {
      state = { ...state, payload };
    },
    resendVerification: () => {}
  },
  extraReducers: {
    [registerUser.fulfilled]: (state, { payload }) => {
      state.isAuthenticated = true;
      state.token = payload.token;
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

export const { login, register, resendVerification } = counterSlice.actions;

export default counterSlice.reducer;
