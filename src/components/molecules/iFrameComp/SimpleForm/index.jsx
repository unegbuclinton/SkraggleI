import React from 'react';
import { useSelector } from 'react-redux';

function SimpleFormIframes({ showAmountShadow }) {
  const { simpleForm } = useSelector((state) => state.elementIframes);

  const {
    text,
    formSize,
    textColor,
    buttonColorAmount,
    borderSizeAmount,
    borderRadiusAmount,
    borderColorAmount,
    label,
    labelColor,
    buttonColor,
    borderSize,
    borderRadius,
    borderColor,
    shdaow
  } = simpleForm;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#ffff  ',
        borderRadius: '1rem',
        alignItems: 'center',
        height: '86%',
        width: '100%',
        overflow: 'auto'
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
          width: `${formSize}px`,
          gap: '0.8rem'
        }}>
        <button
          style={{
            color: textColor,
            aspectRatio: 1 / 0.5,
            background: buttonColorAmount,
            minWidth: `${formSize}%`,
            width: `${formSize}%`,
            borderRadius: `${borderRadiusAmount}px`,
            border: `${borderSizeAmount}px solid ${borderColorAmount}`,
            boxShadow: showAmountShadow
          }}>
          {text}
        </button>
        <button
          style={{
            width: `${formSize}%`,
            color: labelColor,
            aspectRatio: 1 / 0.5,
            minWidth: `${formSize}%`,
            background: buttonColor,
            borderRadius: `${borderRadius}px`,
            border: `${borderSize}px solid ${borderColor}`,
            boxShadow: shdaow
          }}>
          {label}
        </button>
      </form>
    </div>
  );
}

export default SimpleFormIframes;
