import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from 'api/index';
import { toast } from 'react-toastify';

const initialState = {
  isSuccess: false,
  houseHoldData: null
};
export const createHouseHold = createAsyncThunk('contact/houseHold', async (body) => {
  try {
    const response = await apiInstance({
      method: 'post',
      url: '/households/add',
      data: body
    });
    return response?.data;
  } catch (error) {
    toast.error('HouseHold could not be created');
  }
});

export const allHouseHold = createAsyncThunk('contact./allHouseHold', async () => {
  try {
    const response = await apiInstance({
      method: 'get',
      url: 'households/all/1'
    });
    return response?.data.message;
  } catch (error) {
    return error;
  }
});

export const contactSlice = createSlice({
  name: 'contact',
  initialState,

  reducers: {},

  extraReducers: {
    [createHouseHold.fulfilled]: (state) => {
      state.isSuccess = true;
    },

    [createHouseHold.rejected]: (state) => {
      state.isSuccess = false;
    },

    [allHouseHold.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.houseHoldData = action.payload;
    },

    [allHouseHold.rejected]: (state) => {
      state.isSuccess = false;
    }
  }
});
export default contactSlice.reducer;
