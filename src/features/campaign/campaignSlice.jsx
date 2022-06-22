import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { allPeerToPeer } from 'api/campaign/campaign-subtabs';
import { allElements } from 'api/campaign/campaign-subtabs/elements';
import { allForms } from 'api/campaign/campaign-subtabs/forms';
import { allMailBlasts } from 'api/campaign/campaign-subtabs/mailBlast';
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
  formsData: [],
  elementsData: [],
  mailBlast: [],
  isLoading: false
};

export const createNewCampaign = createAsyncThunk('campaign/createCampaign', addCampaign);
export const getAllCampaigns = createAsyncThunk('campaign/getAllCampains', getCampaigns);
export const singleCampaign = createAsyncThunk('campaign/singleCampaign', individualCampaign);
export const getPeerToPeer = createAsyncThunk('campaign/getPeerToPeer', allPeerToPeer);
export const getFormsByID = createAsyncThunk('campaign/getFormsByID', allForms);
export const getMailBlast = createAsyncThunk('campaign/getMailBlast', allMailBlasts);
export const getCampaignElements = createAsyncThunk('campaign/getCampaignElements', allElements);
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
    },
    [getFormsByID.fulfilled]: (state, action) => {
      state.formsData = action.payload;
      state.isLoading = false;
    },
    [getFormsByID.pending]: (state) => {
      state.isLoading = true;
    },
    [getFormsByID.rejected]: (state) => {
      state.isLoading = false;
    },
    [getMailBlast.pending]: (state) => {
      state.isLoading = true;
    },
    [getMailBlast.fulfilled]: (state, action) => {
      state.mailBlast = action.payload;
      state.isLoading = false;
    },
    [getMailBlast.rejected]: (state) => {
      state.isLoading = false;
    },
    [getCampaignElements.fulfilled]: (state, action) => {
      state.elementsData = action.payload;
      state.isLoading = false;
    },
    [getCampaignElements.pending]: (state) => {
      state.isLoading = true;
    },
    [getCampaignElements.rejected]: (state) => {
      state.isLoading = false;
    }
  }
});

export default campaignSlice.reducer;
