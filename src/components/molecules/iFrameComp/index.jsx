import React from 'react';
// import styled from 'styled-components';

function DonationButton({ label, color, background, padding, fontSize }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#ffff',
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

// const ButtonWrapper = styled.div`
//   padding: 1.5rem 0.8rem;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
