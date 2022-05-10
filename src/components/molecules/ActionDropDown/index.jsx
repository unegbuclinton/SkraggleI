import DropdownComponent from 'components/atoms/Dropdown';
import { datas1 } from 'utilities/overviewData';
import React, { useState } from 'react';

function ActionDropDown() {
  const [selected, setSelected] = useState('Filters');
  return (
    <>
      <DropdownComponent selected={selected} setSelected={setSelected} data={datas1} />
    </>
  );
}

export default ActionDropDown;
