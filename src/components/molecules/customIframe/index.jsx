import { COLORS } from 'constants/colors';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
function CustomIframes({ children, ...props }) {
  const [contentRef, setContentRef] = useState(null);

  const mountNode = contentRef?.contentWindow?.document?.body;
  return (
    <IframeWrapper {...props} ref={setContentRef}>
      {mountNode && createPortal(children, mountNode)}
    </IframeWrapper>
  );
}

export default CustomIframes;

const IframeWrapper = styled.iframe`
  width: 35rem;
  height: 60.8rem;
  background-color: ${COLORS.white};
  border-radius: 2rem;
  border: none;
  box-shadow: none;
  background: rgb(230, 232, 239);
`;
