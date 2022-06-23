import Button from 'components/atoms/Button/Button';
import React from 'react';
import { BtnWrapper } from './styles';

function TableBtn({ tags }) {
  return (
    <BtnWrapper>
      {tags?.map((current, idx) => (
        <Button pill className="table-button" key={idx}>
          {current}
        </Button>
      ))}
    </BtnWrapper>
  );
}

export default TableBtn;
