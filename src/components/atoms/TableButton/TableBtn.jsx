import Button from 'components/atoms/Button/Button';
import React from 'react';
import { BtnWrapper } from './styles';

function TableBtn({ tags }, idx) {
  return (
    <BtnWrapper>
      {tags?.map((current) => (
        <Button pill className="table-button" key={idx}>
          {current}
        </Button>
      ))}
    </BtnWrapper>
  );
}

export default TableBtn;
