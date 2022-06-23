import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addP2P, allP2P, deleteP2P, p2pById } from 'api/p2p/overview';
import { getP2PDonation, getP2PRankedParticipant } from 'api/p2p/Preview';
import { logoutUser } from 'features/auth/authSlice';

const initialState = {
  p2pData: [],
  isLoading: false,
  p2pDonationData: [],
  rankedP2pData: [],
  eachP2p: []
};

export const createP2P = createAsyncThunk('p2p/createContact', addP2P);
export const viewP2P = createAsyncThunk('p2p/viewContact', allP2P);
export const getEachP2p = createAsyncThunk('p2p/getEachP2p', p2pById);
export const removeP2P = createAsyncThunk('p2p/removeP2P', deleteP2P);

export const p2pDonation = createAsyncThunk('p2p/p2pDonation', getP2PDonation);
export const rankedP2p = createAsyncThunk('p2p/rankedP2p', getP2PRankedParticipant);

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
    [p2pDonation.pending]: (state) => {
      state.isLoading = true;
    },
    [p2pDonation.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.p2pDonationData = action.payload;
    },

    [p2pDonation.rejected]: (state) => {
      state.isLoading = false;
    },

    [rankedP2p.pending]: (state) => {
      state.isLoading = true;
    },
    [rankedP2p.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rankedP2pData = action.payload;
    },

    [rankedP2p.rejected]: (state) => {
      state.isLoading = false;
    },

    [removeP2P.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [removeP2P.pending]: (state) => {
      state.isLoading = true;
    },
    [removeP2P.rejected]: (state) => {
      state.isLoading = false;
    },
    [logoutUser.fulfilled]: () => {
      return initialState;
    }
  }
});

export default p2pSlice.reducer;
