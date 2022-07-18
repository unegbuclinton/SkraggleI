import React from 'react';
import { useSelector } from 'react-redux';

function TopSupporterDraft() {
  const { topSupporters } = useSelector((state) => state.elementIframes);
  const { label, textColor, accentColor, backgroundColor, borderRadius, borderSize, borderColor } =
    topSupporters;
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
          padding: '32px 20px',
          margin: '12px',
          background: backgroundColor,
          border: `${borderSize}px solid ${borderColor}`,
          borderRadius: `${borderRadius}px`
        }}>
        <h1 style={{ textAlign: 'center', color: textColor, fontWeight: '400' }}> {label}</h1>
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '.7rem',
              marginBottom: '32px'
            }}>
            <div style={{ fontSize: '1.3rem', color: textColor }}>1</div>
            <div>
              <div style={{ fontSize: '1.3rem', color: textColor, fontWeight: '600' }}>Someone</div>
              <div
                style={{
                  fontSize: '1.3rem',
                  color: textColor,
                  fontWeight: '600',
                  marginBottom: '.2rem'
                }}>
                Donated <span style={{ fontWeight: '400', color: accentColor }}>$5,321.43 USD</span>
              </div>
              <div style={{ fontSize: '1.3rem', color: textColor }}>New York, United States</div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '.7rem',
              marginBottom: '32px'
            }}>
            <div style={{ fontSize: '1.3rem', color: textColor }}>2</div>
            <div>
              <div style={{ fontSize: '1.3rem', color: textColor, fontWeight: '600' }}>Someone</div>
              <div
                style={{
                  fontSize: '1.3rem',
                  color: textColor,
                  fontWeight: '600',
                  marginBottom: '.2rem'
                }}>
                Donated{' '}
                <span style={{ fontWeight: '400', color: accentColor }}>$$4,932.63 USD</span>
              </div>
              <div style={{ fontSize: '1.3rem', color: textColor }}>New York, United States</div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '.7rem',
              marginBottom: '32px'
            }}>
            <div style={{ fontSize: '1.3rem', color: textColor }}>3</div>
            <div>
              <div style={{ fontSize: '1.3rem', color: textColor, fontWeight: '600' }}>Someone</div>
              <div
                style={{
                  fontSize: '1.3rem',
                  color: textColor,
                  fontWeight: '600',
                  marginBottom: '.2rem'
                }}>
                Donated <span style={{ fontWeight: '400', color: accentColor }}>$3,783.02 USD</span>
              </div>
              <div style={{ fontSize: '1.3rem', color: textColor }}>New York, United States</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSupporterDraft;
