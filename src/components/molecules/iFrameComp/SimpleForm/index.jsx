import React from 'react';

function SimpleFormIframe({
  formsize,
  textColor,
  backgroundColor,
  borderSize,
  borderRadius,
  borderColor,
  amountLabel,
  showAmountShadow,
  buttonLabel,
  labelColor,
  buttonColor,
  buttonBorder,
  buttonRadius,
  buttonBorderColor,
  showButtonShadow
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#ffff  ',
        borderRadius: '1rem',
        alignItems: 'center',
        height: '86%'
      }}>
      <form
        style={{
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '1rem',
          alignItems: 'center',
          padding: '6px',
          marginBottom: '0',
          minWidth: 'fit-content',
          width: `${formsize}%`,
          gap: '0.8rem'
        }}>
        <button
          style={{
            color: textColor,
            aspectRatio: 1 / 0.5,
            background: backgroundColor,
            minWidth: `${formsize}%`,
            width: `${formsize}%`,
            borderRadius: `${borderRadius}px`,
            border: `${borderSize}px solid ${borderColor}`,
            boxShadow: showAmountShadow
          }}>
          {amountLabel}
        </button>
        <button
          style={{
            width: `${formsize}%`,
            color: labelColor,
            aspectRatio: 1 / 0.5,
            minWidth: `${formsize}%`,
            background: buttonColor,
            borderRadius: `${buttonRadius}px`,
            border: `${buttonBorder}px solid ${buttonBorderColor}`,
            boxShadow: showButtonShadow
          }}>
          {buttonLabel}
        </button>
      </form>
    </div>
  );
}

export default SimpleFormIframe;
