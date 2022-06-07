import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addP2P, allP2P, deleteP2P, p2pById } from 'api/p2p/overview';
import { logoutUser } from 'features/auth/authSlice';

const initialState = {
  p2pData: [],
  isLoading: false,
  eachP2p: []
};

export const createP2P = createAsyncThunk('p2p/createContact', addP2P);
export const viewP2P = createAsyncThunk('p2p/viewContact', allP2P);
export const getEachP2p = createAsyncThunk('getEachP2p', p2pById);
export const removeP2P = createAsyncThunk('p2p/removeP2P', deleteP2P);

//search will go here

export const p2pSlice = createSlice({
  name: 'p2p',
  initialState,
  reducers: {},
  extraReducers: {
    //CREATE P2P

    [createP2P.pending]: (state) => {
      state.isLoading = true;
    },
    [createP2P.fulfilled]: (state) => {
      state.isLoading = false;
    },

    [createP2P.rejected]: (state) => {
      state.isLoading = false;
    },
    //VIEW P2P
    [viewP2P.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.p2pData = action.payload;
    },
    [viewP2P.rejected]: (state) => {
      state.isLoading = false;
    },

    [getEachP2p.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.eachP2p = action.payload;
    },
    [logoutUser.fulfilled]: () => {
      return initialState;
    },

    [removeP2P.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [removeP2P.pending]: (state) => {
      state.isLoading = true;
    },
    [removeP2P.rejected]: (state) => {
      state.isLoading = false;
    }
  }
});

export default p2pSlice.reducer;
