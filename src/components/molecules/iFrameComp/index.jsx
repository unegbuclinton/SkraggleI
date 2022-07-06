import React from 'react';

function DonationButton({ label, color, background, padding, fontSize }) {
  return (
    <button style={{ color: color, background: background, padding: padding, fontSize: fontSize }}>
      {label}
    </button>
  );
}

export default DonationButton;
