import React from 'react';
// import styled from 'styled-components';

function DonationButton({ label, color, background, padding, fontSize }) {
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
        style={{ color: color, background: background, padding: padding, fontSize: fontSize }}>
        {label}
      </button>
    </div>
  );
}

export default DonationButton;
