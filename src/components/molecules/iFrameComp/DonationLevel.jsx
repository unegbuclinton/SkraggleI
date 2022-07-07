import React from 'react';

function DonationLevelIframe() {
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
      <div
        style={{
          border: '2px solid rgb(222, 223, 227)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '230px',
          alignItems: 'center',
          padding: '24px 32px'
        }}>
        <h3>Supporter</h3>
        <p>$25</p>
        <p>Make a difference</p>
        <button style={{ border: 'none' }}>Donate</button>
      </div>
    </div>
  );
}

export default DonationLevelIframe;
