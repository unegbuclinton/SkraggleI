import Button from 'components/atoms/Button/Button';
import { COLORS } from 'constants/colors';
import { FONTWEIGHTS } from 'constants/font-spec';
import { DPIconCopyWhite } from 'icons';
import React, { useCallback } from 'react';
import { toast } from 'react-toastify';
import styled, { css } from 'styled-components';

function CopyField({ grey, value }) {
  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(value)
      .then(() => toast.info('Text copied!'))
      .catch(() => toast.error('Something went wrong'));
  }, [value]);

  return (
    <CopyFieldWrapper>
      <Wrapper grey={grey}>
        <CopyText value={value} readOnly disabled />
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
  max-width: 46.6rem;
  width: 100%;
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
  width: 100%;
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
  height: 4.7rem;
  resize: none;
  border-radius: 0.5rem;
  border: none;
  padding-left: 1.8rem;
  padding-top: 1.3rem;
  font-size: 1.47038rem;
  color: ${COLORS['moore-grey']};
  overflow: hidden;
  text-overflow: ellipsis;
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
