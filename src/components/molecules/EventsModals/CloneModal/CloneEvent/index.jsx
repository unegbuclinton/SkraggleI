import Button from 'components/atoms/Button/Button';
import React from 'react';
import { ButtonWrapper, ModalContainer, ModalWrapper, QuestionWrapper } from './styles';

function CloneEvent({ onClose }) {
  return (
    <ModalWrapper>
      <ModalContainer>
        <QuestionWrapper>Are you sure you want to clone this event?</QuestionWrapper>
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

export default CloneEvent;
