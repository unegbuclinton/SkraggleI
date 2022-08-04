import Button from 'components/atoms/Button/Button';
import React from 'react';
import { ButtonWrapper, ModalContainer, ModalWrapper, QuestionWrapper } from './styles';

function ArchiveEvent({ onClose, onClick }) {
  return (
    <ModalWrapper>
      <ModalContainer>
        <QuestionWrapper>Are you sure you want to archive this event?</QuestionWrapper>
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

export default ArchiveEvent;
