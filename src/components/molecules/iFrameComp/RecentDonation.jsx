import React from 'react';
import { useSelector } from 'react-redux';

function RecentDonationDraft() {
  const { recentDonation } = useSelector((state) => state.elementIframes);

  const { label, backgroundColor, borderColor, borderSize, accentColor, borderRadius, textColor } =
    recentDonation;
  return (
    <div
      style={{
        background: '#ffff  ',
        borderRadius: '1rem',
        height: '86%',
        padding: '1rem .3rem'
      }}>
      <div
        style={{
          padding: '8px 24px',
          margin: '12px',
          background: backgroundColor,
          border: `${borderSize}px solid ${borderColor}`,
          borderRadius: `${borderRadius}px`
        }}>
        <h1 style={{ fontSize: '24px', fontWeight: '400', textAlign: 'center', color: textColor }}>
          {label}
        </h1>
        <div>
          <div style={{ fontWeight: '600', fontSize: '18px', color: textColor }}>Ann Bowman</div>
          <div
            style={{ fontWeight: '600', marginBottom: '4px', fontSize: '18px', color: textColor }}>
            donated <span style={{ color: accentColor }}> $11,503.09</span>
          </div>
          <div style={{ fontSize: '16px', marginBottom: '6px', color: textColor }}>
            New York, United States
          </div>
          <div style={{ fontSize: '16px', color: textColor }}>
            Thanks for all of the work you re doing in our community!
          </div>
          <p style={{ color: 'grey', margin: '0' }}>2 hours ago</p>
        </div>
      </div>
    </div>
  );
}

export default RecentDonationDraft;
