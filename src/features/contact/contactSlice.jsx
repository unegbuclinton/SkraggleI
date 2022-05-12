import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from 'api/index';

export const contactHouseHold = createAsyncThunk('contact/houseHold', async (body) => {
  try {
    return await apiInstance({
      method: 'post',
      url: '/households/add',
      data: body
    });
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
export default contactSlice;
