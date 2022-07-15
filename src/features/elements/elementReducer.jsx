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
  stickyButton: {}
};
export const elementIframesReducer = createSlice({
  name: 'elementModal',
  initialState,
  reducers: {
    donationButtonAction: (state, action) => {
      state.donationButton = action.payload;
    }
  }
});

export const { donationButtonAction } = elementIframesReducer.actions;
export default elementIframesReducer.reducer;
