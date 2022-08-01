import React from 'react';
import { useSelector } from 'react-redux';
// import styled from 'styled-components';

function P2PButtonIframe() {
  const { p2pButtons } = useSelector((state) => state.elementIframes);

  const {
    label,
    buttonWidth,
    labelColor,
    buttonColor,
    borderColor,
    buttonHeight,
    borderSize,
    borderRadius
  } = p2pButtons;

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
      <button
        style={{
          minWidth: buttonWidth,
          color: labelColor,
          minHeight: buttonHeight,
          background: buttonColor,
          border: `${borderSize}px solid ${borderColor}`,
          borderRadius: `${borderRadius}px`
        }}>
        {label}
      </button>
    </div>
  );
}

export default P2PButtonIframe;
