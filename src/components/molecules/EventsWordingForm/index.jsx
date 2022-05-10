import React from 'react';
import Button from 'components/atoms/Button/Button';
import { Container } from './styles';
import Input from 'components/atoms/Input/Input';

function EventsForm({ setClick }) {
  return (
    <Container>
      <Input className="input-field" />
      <div className="button-container">
        <Button type="button" className="btn-save">
          Save
        </Button>
        <Button type="button" onClick={() => setClick(false)} className="btn-cancel">
          Cancel
        </Button>
      </div>
    </Container>
  );
}

export default EventsForm;
