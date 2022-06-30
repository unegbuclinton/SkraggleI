import Button from 'components/atoms/Button/Button';
import React from 'react';
import { ButtonWrapper, ModalContainer, ModalWrapper } from './styles';

function DeletePackage({ onClose, onClick }) {
  return (
    <ModalWrapper>
      <ModalContainer>
        <ButtonWrapper>
          <Button className="btn-yes" onClick={onClick}>
            Yes
          </Button>
          <Button onClick={onClose} className="btn-no">
            No
          </Button>
        </ButtonWrapper>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default DeletePackage;
