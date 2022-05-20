import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCampaign, getCampaings } from 'api/campaign/campaigns';

const initialState = {
  campaigns: [],
  isLoading: false
};

export const createNewCampaign = createAsyncThunk('campaign/createCampaign', addCampaign);
export const getAllCampaigns = createAsyncThunk('campaign/getAllCampains', getCampaings);

export const campaignSlice = createSlice({
  name: 'campaign',
  initialState,
  reducers: {},
  extraReducers: {
    [createNewCampaign.fulfilled]: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
    },
    [createNewCampaign.rejected]: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
    },
    [createNewCampaign.pending]: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
    },
    [getAllCampaigns.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.campaigns = action.payload;
      console.log(action.payload);
    },
    [getAllCampaigns.rejected]: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
    },
    [getAllCampaigns.pending]: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
    }
  }
});

export default campaignSlice.reducer;
