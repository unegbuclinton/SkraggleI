import Button from 'components/atoms/Button/Button';
import { COLORS } from 'constants/colors';
import { FONTWEIGHTS } from 'constants/font-spec';
import { DPIconCopyWhite } from 'icons';
import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';

function CopyField({ grey }) {
  const textArea = useState(null);

  const copyToClipboard = useCallback(() => {
    const text = textArea.current.value;
    navigator.clipboard.writeText(text);
    alert('Text Copied');
  }, []);

  return (
    <CopyFieldWrapper>
      <Wrapper grey={grey}>
        <CopyText ref={textArea} value="Lorem ipsum dolor sit amet, consectetur adipisci..." />
        <ButtonCopy grey={grey} className="preview__copy-button" onClick={copyToClipboard}>
          <DPIconCopyWhite className="preview__icon-copy" />
          Copy
        </ButtonCopy>
      </Wrapper>
    </CopyFieldWrapper>
  );
}

export default CopyField;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 46.6rem;
  border: 1px solid ${COLORS.pink};
  border-radius: 0.5rem;
  ${({ grey }) =>
    grey &&
    css`
      border: 1px solid ${COLORS['grey-400']};
    `};
`;

export const CopyFieldWrapper = styled.div`
  display: flex;
  gap: 3rem;
  h1 {
    font-weight: ${FONTWEIGHTS.medium};
    line-height: 1.9rem;
    color: ${COLORS['grey-400']};
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

export const CopyText = styled.textarea`
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

  ${({ grey }) =>
    grey &&
    css`
      background-color: ${COLORS['grey-400']};
    `};
`;
