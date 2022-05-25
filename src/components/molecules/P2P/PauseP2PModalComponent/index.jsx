import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalWrapper } from './styles';

function PauseP2PModalComponent({ onClose }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/peer-to-peer');
  };

  return (
    <ModalWrapper>
      <Card className="button-container">
        <Button type="button" className="yes-button" onClick={(e) => handleClick(e)}>
          Yes
        </Button>
        <Button type="button" className="no-button" onClick={onClose}>
          No
        </Button>
      </Card>
    </ModalWrapper>
  );
}

export default PauseP2PModalComponent;
