// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import apiInstance from 'api';

// const initialState = {
//   isAuthenticated: false,
//   token: null
// };

// export const loginUser = createAsyncThunk('auth/loginUser', async (body) => {
//   const response = await apiInstance.post('/admin/login', body);
//   return console.log(response.data);
// });

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   //   register: (state, payload) => {
//   //     state = { ...state, payload };
//   //   },
//   //   resendVerification: () => {}
//   // },
//   extraReducers: {
//     // Add reducers for additional action types here, and handle loading state as needed
//     // builder.addCase(loginUser.fulfilled, (state, { payload }) => {
//     //   state.isAuthenticated = true;
//     //   state.token = payload.token;
//     // });
//     // builder.addCase(loginUser.rejected, (state, action) => {
//     //   Add user to the state array
//     //   state.entities.push(action.payload);
//     // });
//     // builder.addCase(loginUser.pending, (state, action) => {
//     //   Add user to the state array
//     //   state.entities.push(action.payload);
//     // });
//     [loginUser.pending]: (state) => {
//       state.post = [...state.post];
//     },

//     [loginUser.fulfilled]: (state, { payload }) => {
//       state.isAuthenticated = true;
//       state.token = payload.token.then();
//     },

//     [loginUser.rejected]: (state) => {
//       state.isSuccess = false;
//       // state.post = [...state.post, payload];
//     }
//   }
// });

// export const { login, register, resendVerification } = authSlice.actions;

// export default authSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from 'api';

export const loginUser = createAsyncThunk('auth/loginUser', async (body) => {
  const response = await apiInstance.post('/admin/login', body);
  return console.log(response.data);
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: null
  },
  reducers: {},

  extraReducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isAuthenticated = true;
      state.token = payload.token;
      console.log(payload);
    }
  }
});

export const { login, register, resendVerification } = authSlice.actions;

export default authSlice.reducer;
