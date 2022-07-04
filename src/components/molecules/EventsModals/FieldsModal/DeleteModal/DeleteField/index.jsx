import Button from 'components/atoms/Button/Button';
import React from 'react';
import { ButtonWrapper, ModalContainer, ModalWrapper } from './styles';

function DeleteField({ onCloseModal, onClick }) {
  return (
    <ModalWrapper>
      <ModalContainer>
        <ButtonWrapper>
          <Button className="btn-yes" onClick={onClick}>
            Yes
          </Button>
          <Button onClick={onCloseModal} className="btn-no">
            No
          </Button>
        </ButtonWrapper>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default DeleteField;
