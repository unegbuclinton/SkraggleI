// import SearchBar from 'components/atoms/SearchBar/SearchBar';
import Button from 'components/atoms/Button/Button';
import DropdownComponent from 'components/atoms/Dropdown';
import NewSearchBar from 'components/atoms/NewSearchBar';
import { DPIconAdd } from 'icons';
import React, { useState } from 'react';
import { datas1 } from 'utilities/overviewData';
import { HeaderWrapper } from './styles';

function TableHeader({ title, header, setOpen, className, value, onChange }) {
  const [selected, setSelected] = useState('Filters');
  return (
    <HeaderWrapper>
      <h2 className={className}>{header}</h2>
      <div className="header">
        <DropdownComponent selected={selected} setSelected={setSelected} data={datas1} />
        <NewSearchBar value={value} onChange={onChange} />
        <Button className="header__header-btn" onClick={() => setOpen(true)}>
          <DPIconAdd className="header__header-btn--icon" />
          {title}
        </Button>
      </div>
    </HeaderWrapper>
  );
}

export default TableHeader;
