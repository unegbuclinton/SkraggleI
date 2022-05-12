import Button from 'components/atoms/Button/Button';
import React from 'react';
import { ButtonWrapper, ModalContainer, ModalWrapper } from './styles';

function ClonePackage({ onClose }) {
  return (
    <ModalWrapper>
      <ModalContainer>
        <ButtonWrapper>
          <Button className="btn-yes">Yes</Button>
          <Button onClick={onClose} className="btn-no">
            No
          </Button>
        </ButtonWrapper>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default ClonePackage;
