import { useElement } from 'context';
import React from 'react';
// import styled from 'styled-components';

function DonationButton() {
  // vars
  const { elementConfig, setElementConfig } = useElement();

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
      <button style={elementConfig.style ?? {}}>
        {elementConfig.icon.jsx && (
          <span style={{ color: elementConfig.icon.color, marginRight: 2 }}>
            {elementConfig.icon.jsx}
          </span>
        )}
        {elementConfig.children}
      </button>
    </div>
  );
}

export default DonationButton;
