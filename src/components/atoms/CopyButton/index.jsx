import { DPIconCopy } from 'icons';
import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const CopyButton = ({ children, onClick, className }) => {
  return (
    <Button type="button" className={className} onClick={onClick}>
      {children}
      <DPIconCopy></DPIconCopy>
    </Button>
  );
};

export default CopyButton;

export const ButtonCopy = styled(Button)`
  gap: 0.9rem;
  display: flex;
  position: absolute;
  width: 9.7rem;
  height: 4.7rem;
  border-radius: 0px 5px 5px 0px;
  right: 0;
  bottom: 0;
`;
