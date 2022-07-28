import React from 'react';
import { useSelector } from 'react-redux';

function DonationButton() {
  const { donationButton } = useSelector((state) => state.elementIframes);

  const {
    label,
    buttonWidth,
    labelColor,
    buttonColor,
    borderColor,
    buttonHeight,
    borderSize,
    borderRadius
  } = donationButton;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#ffff  ',
        borderRadius: '1rem',
        alignItems: 'center',
        height: '86%',
        padding: '1rem .3rem'
      }}>
      <button
        style={{
          width: buttonWidth,
          color: labelColor,
          height: buttonHeight,
          background: buttonColor,
          border: `${borderSize}px solid ${borderColor}`,
          borderRadius: `${borderRadius}px`
        }}>
        {label}
      </button>
    </div>
  );
}

export default DonationButton;
