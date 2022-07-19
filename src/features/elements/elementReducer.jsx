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
    labelColor: '#212830',
    backgroundColor: '#ffff',
    borderSize: '2px',
    progressBarColor: '#2797FF',
    borderRadius: '4px'
  },
  donationLevel: {
    labelColor: '',
    buttonColor: '',
    backgroundColor: '',
    textColor: '',
    accentTextColor: '',
    buttonBorderSize: '',
    buttonBorderRadius: '',
    buttonBorderColor: '',
    panelBorderSize: '',
    panelBorderRadius: '',
    panelBorderColor: '',
    buttonLabel: '',
    accentLabel: '',
    accentLevelLabel: '',
    descriptionLabel: ''
  },
  topSupporters: {
    label: '',
    textColor: '',
    accentColor: '#5C5C5C',
    backgroundColor: '#000000',
    borderColor: '#BEA2A2',
    borderSize: '1px',
    borderRadius: '10px'
  },
  recentDonation: {
    label: '',
    textColor: '',
    accentColor: '',
    backgroundColor: '',
    borderColor: '',
    borderSize: '',
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
    },
    donationLevelAction: (state, action) => {
      state.donationLevel = action.payload;
    },
    topSupportersAction: (state, action) => {
      state.topSupporters = action.payload;
    },
    recentDonationActions: (state, action) => {
      state.recentDonation = action.payload;
    }
  }
});

export const {
  donationButtonAction,
  reminderAction,
  goalMeterAction,
  donationLevelAction,
  topSupportersAction,
  recentDonationActions
} = elementIframesReducer.actions;
export default elementIframesReducer.reducer;
