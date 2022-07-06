import React, { useState } from 'react';
import { createPortal } from 'react-dom';
function CustomIframes({ children, ...props }) {
  const [contentRef, setContentRef] = useState(null);

  const mountNode = contentRef?.contentWindow?.document?.body;
  return (
    <iframe
      {...props}
      ref={setContentRef}
      style={{
        width: '25rem',
        height: '30rem',
        boxShadow: 'none',
        borderRadius: '.7rem',
        border: '1px solid black'
      }}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
}

export default CustomIframes;
