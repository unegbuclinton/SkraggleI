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
    shdaow: ''
  },
  stickyButton: {},
  p2pButtons: {
    label: 'Start a Fundraiser',
    labelColor: '#000',
    buttonColor: '#fff',
    borderSize: '',
    borderRadius: '',
    borderColor: '',
    buttonHeight: '',
    buttonWidth: 'fit-content',
    shdaow: ''
  },
  simpleForm: {
    formSize: '',
    text: '$60',
    textColor: '',
    buttonColorAmount: '',
    borderSizeAmount: '',
    borderRadiusAmount: '',
    borderColorAmount: '',
    label: 'Donate',
    labelColor: '#000',
    buttonColor: '#fff',
    borderSize: '',
    borderRadius: '',
    borderColor: '',
    shdaow: ''
  }
};
export const elementIframesReducer = createSlice({
  name: 'elementModal',
  initialState,
  reducers: {
    donationButtonAction: (state, action) => {
      state.donationButton = action.payload;
    },
    p2pButtonAction: (state, action) => {
      state.p2pButtons = action.payload;
    },
    simpleFormAction: (state, action) => {
      state.simpleForm = action.payload;
    }
  }
});

export const { donationButtonAction, p2pButtonAction, simpleFormAction } =
  elementIframesReducer.actions;
export default elementIframesReducer.reducer;
