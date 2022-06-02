import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addP2P, allP2P } from 'api/p2p/overview';
import { logoutUser } from 'features/auth/authSlice';

const initialState = {
  p2pData: [],
  isLoading: false
};

export const createP2P = createAsyncThunk('p2p/createContact', addP2P);
export const viewP2P = createAsyncThunk('p2p/viewContact', allP2P);

//search will go here

export const p2pSlice = createSlice({
  name: 'p2p',
  initialState,
  reducers: {},
  extraReducers: {
    //CREATE CONTACT
    [createP2P.fulfilled]: (state) => {
      state.isLoading = true;
    },

    [createP2P.rejected]: (state) => {
      state.isLoading = false;
    },
    //VIEW CONTACTS
    [viewP2P.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.p2pData = action.payload;
    },
    [viewP2P.rejected]: (state) => {
      state.isLoading = false;
    },

    [logoutUser.fulfilled]: () => {
      return initialState;
    }
  }
});

export default p2pSlice.reducer;
