import React from 'react';
import { useSelector } from 'react-redux';

function DonationLevelDraft() {
  const { donationLevel } = useSelector((state) => state.elementIframes);
  const {
    backgroundColor,
    textColor,
    accentTextColor,
    panelBorderSize,
    panelBorderRadius,
    panelBorderColor,
    buttonColor,
    labelColor,
    buttonBorderSize,
    buttonBorderRadius,
    accentLabel,
    accentLevelLabel,
    descriptionLabel,
    buttonLabel,
    buttonBorderColor
  } = donationLevel;
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
      <div
        style={{
          padding: '24px 32px',
          border: `${panelBorderSize}px solid ${panelBorderColor}`,
          borderRadius: `${panelBorderRadius}px`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: backgroundColor,
          alignItems: 'center'
        }}>
        <p
          style={{ marginBottom: '16px', fontSize: '1.6rem', fontWeight: '600', color: textColor }}>
          {accentLabel}
        </p>
        <h1
          style={{
            marginBottom: '16px',
            fontSize: '3.2rem',
            fontWeight: '600',
            color: accentTextColor
          }}>
          {accentLevelLabel}
        </h1>
        <p
          style={{
            marginBottom: '16px',
            fontSize: '1.6rem',
            color: textColor,
            textAlign: 'center'
          }}>
          {descriptionLabel}
        </p>
        <div
          role="button"
          style={{
            borderRadius: `${buttonBorderRadius}px`,
            padding: '1rem',
            background: buttonColor,
            textAlign: 'center',
            fontSize: '1.3rem',
            fontWeight: '600',
            border: `${buttonBorderSize}px solid ${buttonBorderColor}`,
            color: labelColor
          }}>
          {buttonLabel}
        </div>
      </div>
    </div>
  );
}

export default DonationLevelDraft;
