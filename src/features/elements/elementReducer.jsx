import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  donationButton: {
    label: 'Donate',
    labelColor: '#000',
    buttonColor: '#fff',
    borderSize: '',
    borderRadius: '',
    borderColor: '',
    buttonHeight: '',
    buttonWidth: 'fit-content',
    boxShadow: ''
  },
  stickyButton: {},
  reminder: {
    boxShadow: '',
    labelColor: '#000',
    backgroundColor: '#fff',
    borderSize: '',
    buttonColor: '',
    borderRadius: '',
    borderColor: '',
    iconColor: ''
  },
  goalMeter: {
    animation: '',
    labelColor: '#000',
    backgroundColor: '#fff',
    borderSize: '',
    progressBarColor: '',
    borderRadius: ''
  }
};
export const elementIframesReducer = createSlice({
  name: 'elementModal',
  initialState,
  reducers: {
    donationButtonAction: (state, action) => {
      state.donationButton = action.payload;
    },
    reminderAction: (state, action) => {
      state.reminder = action.payload;
    },
    goalMeterAction: (state, action) => {
      state.goalMeter = action.payload;
    }
  }
});

export const { donationButtonAction, reminderAction, goalMeterAction } =
  elementIframesReducer.actions;
export default elementIframesReducer.reducer;
