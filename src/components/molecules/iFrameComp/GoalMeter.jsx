import React from 'react';

function GoalMeter() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#ffff  ',
        borderRadius: '1rem',
        height: '86%',
        padding: '0 20px'
      }}>
      <p style={{ fontSize: '20px', marginBottom: '10px' }}>$5,000 of $10,000 goal</p>
      <div
        style={{
          width: '100%',
          height: '20px',
          background: '#fff',
          borderRadius: '3px',
          outline: '#1E003E solid 2px'
        }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '50%',
            color: '#fff',
            background: '#1E003E',
            height: '100%',
            borderRadius: '3px'
          }}>
          50%
        </div>
      </div>
    </div>
  );
}

export default GoalMeter;
