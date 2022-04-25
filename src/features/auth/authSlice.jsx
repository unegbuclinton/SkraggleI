import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  isAuthenticated: false,
  token: null,
};

const loginUser = createAsyncThunk('auth/login', async (userId, thunkAPI) => {
  const response = await axios.post('/url', {});
  return response.data;
});

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.isAuthenticated = true;
      // state.token = payload.token;
    },
    register: (state, payload) => {
      state = { ...state, payload };
    },
    resendVerification: (state, action) => {},
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.isAuthenticated = true;
      state.token = payload.token;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload);
    });
    builder.addCase(loginUser.pending, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload);
    });
  },
});

export const { login, register, resendVerification } = counterSlice.actions;

export default counterSlice.reducer;
