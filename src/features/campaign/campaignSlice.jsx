import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { allPeerToPeer } from 'api/campaign/campaign-subtabs';
import {
  addCampaign,
  deleteCampaign,
  getCampaigns,
  individualCampaign
} from 'api/campaign/campaigns';
import { logoutUser } from 'features/auth/authSlice';

const initialState = {
  campaigns: [],
  campaignByID: [],
  p2p: [],
  isLoading: false
};

export const createNewCampaign = createAsyncThunk('campaign/createCampaign', addCampaign);
export const getAllCampaigns = createAsyncThunk('campaign/getAllCampains', getCampaigns);
export const singleCampaign = createAsyncThunk('campaign/singleCampaign', individualCampaign);
export const getPeerToPeer = createAsyncThunk('campaign/getPeerToPeer', allPeerToPeer);
export const removeCampaign = createAsyncThunk('campaign/removeCampaign', deleteCampaign);

export const campaignSlice = createSlice({
  name: 'campaign',
  initialState,
  reducers: {},
  extraReducers: {
    [createNewCampaign.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [createNewCampaign.rejected]: (state) => {
      state.isLoading = false;
    },
    [createNewCampaign.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllCampaigns.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.campaigns = action.payload;
    },
    [getAllCampaigns.rejected]: (state) => {
      state.isLoading = false;
    },
    [getAllCampaigns.pending]: (state) => {
      state.isLoading = true;
    },
    [singleCampaign.fulfilled]: (state, action) => {
      state.campaignByID = action.payload;
      state.isLoading = false;
    },
    [singleCampaign.pending]: (state) => {
      state.isLoading = true;
    },
    [getPeerToPeer.fulfilled]: (state, action) => {
      state.p2p = action.payload;
      state.isLoading = false;
    },
    [getPeerToPeer.pending]: (state) => {
      state.isLoading = true;
    },
    [logoutUser.fulfilled]: () => {
      return initialState;
    },
    [removeCampaign.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [removeCampaign.pending]: (state) => {
      state.isLoading = true;
    },
    [removeCampaign.rejected]: (state) => {
      state.isLoading = false;
    }
  }
});

export default campaignSlice.reducer;
