import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { donationByContact, p2pLeaderBoard } from 'api/reports';
import { logoutUser } from 'features/auth/authSlice';

const initialState = {
  isLoading: false,
  leaderBoard: [],
  contactDonation: []
};

export const getP2PLeaderBoard = createAsyncThunk('report /getP2PLeaderBoard', p2pLeaderBoard);

export const getDonationByContact = createAsyncThunk(
  'report/getDonationByContact',
  donationByContact
);

export const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {},
  extraReducers: {
    [getP2PLeaderBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.leaderBoard = action.payload;
    },
    [getP2PLeaderBoard.rejected]: (state) => {
      state.isLoading = false;
    },
    [getP2PLeaderBoard.pending]: (state) => {
      state.isLoading = true;
    },
    [getDonationByContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contactDonation = action.payload;
    },
    [getDonationByContact.rejected]: (state) => {
      state.isLoading = false;
    },
    [getDonationByContact.pending]: (state) => {
      state.isLoading = true;
    },
    [logoutUser.fulfilled]: () => {
      return initialState;
    }
  }
});

export default reportSlice.reducer;
