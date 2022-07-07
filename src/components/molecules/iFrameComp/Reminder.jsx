import React from 'react';

function ReminderIframe() {
  return (
    <div
      style={{
        position: 'relative',
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
          boxShadow: ' rgb(0 0 0 / 40%) 0px 1px 4px',
          position: 'absolute',
          bottom: '10px',
          display: 'flex',
          alignItems: 'center',
          margin: '5px',
          borderRadius: '6px',
          height: '98px'
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 22px 0 30px',
            borderRight: '1px solid rgba(0,0,0,.1)',
            cursor: 'pointer',
            height: '100%'
          }}>
          <p style={{ margin: '0', flex: '1' }}>Complete your $240 gift to make a difference</p>
        </div>
        <div style={{ minWidth: '85px', cursor: 'pointer' }}>
          <div role="button" style={{ padding: '10px', borderBottom: '1px solid rgba(0,0,0,.1)' }}>
            I’m ready
          </div>

          <div role="button" style={{ padding: '10px' }}>
            Not today
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReminderIframe;
