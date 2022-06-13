import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconCopyWhite } from 'icons';
import { React, useCallback, useState } from 'react';
import styled from 'styled-components';

function UrlModal({ onClose }) {
  const textArea = useState(null);

  const copyToClipboard = useCallback((e) => {
    const text = textArea.current.value;
    navigator.clipboard.writeText(text);
    e.target.focus();
    alert('Text Copied');
  }, []);

  return (
    <SecondModalWrapper onClose={onClose}>
      <Card>
        <h1>Use this link to direct donors to your new fundraiser.</h1>
        <div className="copy__textarea">
          <CopyText ref={textArea} value="Lorem ipsum dolor sit amet, consectetur adipisci..." />
          <ButtonCopy className="preview__copy-button" onClick={copyToClipboard}>
            <DPIconCopyWhite className="preview__icon-copy" />
            Copy
          </ButtonCopy>
        </div>
      </Card>
    </SecondModalWrapper>
  );
}

export default UrlModal;
const SecondModalWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0 4rem 0;

  h1 {
    text-align: center;
    margin-bottom: 2.3rem;
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    line-height: 152.69%;
    color: ${COLORS['grey-200']};
  }

  .copy {
    &__textarea {
      display: flex;
      position: relative;
      width: 46.6rem;
      border: 1px solid ${COLORS.pink};
      border-radius: 0.5rem;
    }
    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.9rem;
      position: absolute;
      width: 9.7rem;
      height: 4.7rem;
      border-radius: 0px 5px 5px 0px;
      right: 0;
      bottom: 0;
    }
  }
`;

const CopyText = styled.textarea`
  width: 100%;
  outline: none;
  height: 4.6rem;
  resize: none;
  border-radius: 0.5rem;
  border: none;
  padding-left: 1.8rem;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  font-size: 1.47038rem;
  color: ${COLORS['moore-grey']};
`;

export const SecondButtonsContainer = styled.div`
  display: flex;
  justify-content: right;
`;

export const ButtonCopy = styled(Button)`
  gap: 0.9rem;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 9.7rem;
  height: 4.7rem;
  border-radius: 0px 5px 5px 0px;
  right: 0;
  bottom: 0;
`;
