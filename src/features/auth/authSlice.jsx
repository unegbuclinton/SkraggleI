import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from 'apiInstance';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  isAuthenticated: false,
  token: null,
  isLoading: false,
  mail: '',
  resetMail: [],
  resetPassword: false,
  confirmEmailOTP: false,
  emailOTP: []
};

export const registerUser = createAsyncThunk('auth/register', async (body) => {
  try {
    const response = await apiInstance({
      method: 'post',
      url: '/admin',
      data: body
    });
    return response.data;
  } catch (error) {
    toast.error('User already exists');
  }
});

export const signupOTP = createAsyncThunk('auth/signupOTP', async (body) => {
  try {
    const signupOTPResponse = await apiInstance({
      method: 'post',
      url: '/admin/verify-account',
      data: body
    });
    return signupOTPResponse?.data?.message;
  } catch (error) {
    toast.error('OTP is incorrect');
  }
});

export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (body) => {
  try {
    const forgotResponse = await apiInstance({
      method: 'post',
      url: '/admin/password',
      data: body
    });
    return forgotResponse?.data?.message;
  } catch (error) {
    toast.error('No user is found');
  }
});

export const confirmforgotPassword = createAsyncThunk(
  'auth/confirmforgotPassword',
  async (body) => {
    try {
      const confirmforgotResponse = await apiInstance({
        method: 'post',
        url: '/admin/reset-password',
        data: body
      });
      return confirmforgotResponse.data.message;
    } catch (error) {
      toast.error('OTP is incorrect');
    }
  }
);

export const loginUser = createAsyncThunk('auth/loginUser', async (body) => {
  try {
    const response = await apiInstance({
      method: 'post',
      url: '/admin/login',
      data: body
    });
    return response?.data?.message;
  } catch (error) {
    toast.error('username or password is incorrect');
  }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  try {
    await apiInstance.delete('/admin/logout');
    return;
  } catch (error) {
    return error?.message;
  }
});

export const resendVerification = createAsyncThunk('auth/resendVerification', async (body) => {
  const response = await apiInstance.post('/email/verification/send', body);
  return response?.data;
});

export const purge = () => {};

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
    [logoutUser.fulfilled]: () => {
      return initialState;
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
    },
    [confirmforgotPassword.fulfilled]: (state, action) => {
      state.resetMail = action.payload;
      state.resetPassword = true;
    },
    [confirmforgotPassword.rejected]: (state) => {
      state.resetPassword = false;
    },
    [signupOTP.fulfilled]: (state, action) => {
      state.emailOTP = action.payload;
      state.confirmEmailOTP = true;
    },
    [signupOTP.rejected]: (state) => {
      state.confirmEmailOTP = false;
    }
  }
});

export default authSlice.reducer;
