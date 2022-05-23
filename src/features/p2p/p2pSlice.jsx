import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPeerToPeer, peerToPeer } from 'api/p2p/p2pFundRaiser';

const initialState = {
  p2pData: []
};

export const createP2p = createAsyncThunk('contact/createContact', peerToPeer);

export const fetchP2p = createAsyncThunk('contact/createContact', getPeerToPeer);

export const p2pSlice = createSlice({
  name: 'peertopeer',
  initialState,
  reducers: {},

  extraReducers: {
    [createP2p.fulfilled]: (state, action) => {
      state.p2pData = action.payload;
    },

    [fetchP2p.fulfilled]: (state, action) => {
      state.p2pData = action.payload;
    }
  }
});

export default p2pSlice.reducer;
