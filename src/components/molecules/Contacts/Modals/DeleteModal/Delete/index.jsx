import Button from 'components/atoms/Button/Button';
import React from 'react';
import { ButtonContainer, DeleteWrapper, WarningText, WarningWrapper } from './styles';

function Delete({ onClose, handleDelete, warning }) {
  const deleteContact = () => {
    handleDelete();
    onClose();
  };
  return (
    <DeleteWrapper>
      <WarningWrapper>
        <WarningText>{warning}</WarningText>
      </WarningWrapper>
      <ButtonContainer>
        <Button type="button" onClick={onClose} className="cancel-btn" auth invert>
          Cancel
        </Button>
        <Button type="submit" onClick={deleteContact} className="save-btn">
          Delete
        </Button>
      </ButtonContainer>
    </DeleteWrapper>
  );
}

export default Delete;
