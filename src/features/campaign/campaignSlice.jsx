import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCampaign } from 'api/campaign/campaigns';

const initialState = {
  campaigns: [],
  isLoading: false
};

export const createNewCampaign = createAsyncThunk('contact/createCampaign', addCampaign);

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
    }
  }
});

export default campaignSlice.reducer;
