import React from 'react';
import { useSelector } from 'react-redux';

function GoalMeterDraft() {
  const { goalMeter } = useSelector((state) => state.elementIframes);
  const { labelColor, backgroundColor, borderSize, progressBarColor, borderRadius } = goalMeter;

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
      <p style={{ fontSize: '20px', marginBottom: '10px', color: labelColor }}>
        $5,000 of $10,000 goal
      </p>
      <div
        style={{
          width: '100%',
          height: '20px',
          background: backgroundColor,
          borderRadius: `${borderRadius}px`,
          outline: `${progressBarColor} solid ${borderSize}px`
        }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '50%',
            color: '#fff',
            background: progressBarColor,
            height: '100%',
            borderRadius: `${borderRadius}px`
          }}>
          50%
        </div>
      </div>
    </div>
  );
}

export default GoalMeterDraft;
