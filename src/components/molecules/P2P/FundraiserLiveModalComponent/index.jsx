import Card from 'components/atoms/Card';
import CopyButton from 'components/atoms/CopyButton';
import React, { useRef, useState } from 'react';
import { CopyText, ModalWrapper } from './styles';

const FundraiserLiveComponent = ({ onClose, isShown }) => {
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
    alert('Text Copied');
  }

  return (
    <ModalWrapper>
      <Card>
        <h1>Use this link to direct donors to your new P2P fundraiser</h1>
        <div className="copy__textarea">
          <CopyText
            ref={textAreaRef}
            value="Lorem ipsum dolor sit amet, consectetur adipisci..."
          />
          <CopyButton className="copy__button" onClick={copyToClipboard}>
            Copy
          </CopyButton>
        </div>
      </Card>
    </ModalWrapper>
  );
};

export default FundraiserLiveComponent;
