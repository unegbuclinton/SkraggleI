import Button from 'components/atoms/Button/Button';
import React from 'react';
import { BtnWrapper } from './styles';

function TableBtn({ active }) {
  return (
    <BtnWrapper>
      {active ? (
        <Button className="active-table-btn"> Active </Button>
      ) : (
        <>
          {' '}
          <Button pill className="table-button">
            Muslim
          </Button>
          <Button pill className="table-button">
            Volunteer
          </Button>
        </>
      )}
    </BtnWrapper>
  );
}

export default TableBtn;
