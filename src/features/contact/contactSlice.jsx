import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from 'api/index';

export const contactHouseHold = createAsyncThunk('contact/houseHold', async (body) => {
  try {
    const response = await apiInstance({
      method: 'post',
      url: '/households/add',
      data: body
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    isSuccess: false
  },

  reducers: {},

  extraReducers: {
    [contactHouseHold.fulfilled]: (state) => {
      state.isSuccess = true;
    },

    [contactHouseHold.rejected]: (state) => {
      state.isSuccess = false;
    }
  }
});
export default contactSlice.reducer;
