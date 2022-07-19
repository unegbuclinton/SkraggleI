import React from 'react';
import { useSelector } from 'react-redux';

function MessageBarDraft() {
  const { messageBar } = useSelector((state) => state.elementIframes);
  const {
    title,
    content,
    backgroundColor,
    textColor,
    label,
    borderColor,
    borderSize,
    borderRadius,
    buttonColor,
    labelColor
  } = messageBar;
  return (
    <div
      style={{
        background: '#ffff  ',
        borderRadius: '1rem',
        height: '86%'
        // padding: '1rem .3rem'
      }}>
      <div
        style={{
          padding: '12px',
          boxShadow: 'rgb(0 0 0 / 40%) 0px 1px 4px',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          backgroundColor: backgroundColor
        }}>
        <div>
          <h1
            style={{
              fontSize: '1.4rem',
              fontWeight: '600',
              marginBottom: '8px',
              color: textColor
            }}>
            {title}
          </h1>
        </div>
        <p style={{ fontSize: '1.2rem', margin: '0', color: textColor }}>{content}</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
          <button
            style={{
              fontSize: '1.4rem',
              fontWeight: '600',
              padding: '1rem',
              color: labelColor,
              backgroundColor: buttonColor,
              border: `${borderSize}px solid ${borderColor}`,
              marginTop: '18px',
              borderRadius: `${borderRadius}px`
            }}>
            {label}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessageBarDraft;
