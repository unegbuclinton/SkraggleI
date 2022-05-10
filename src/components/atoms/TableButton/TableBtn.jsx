import React from 'react';
import { BtnWrapper } from './styles';
import Button from 'components/atoms/Button/Button';

function TableBtn() {
  return (
    <BtnWrapper>
      <Button pill className="table-button">
        {' '}
        Muslim{' '}
      </Button>
      <Button pill className="table-button">
        Volunteer
      </Button>
    </BtnWrapper>
  );
}

export default TableBtn;
