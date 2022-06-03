import Button from 'components/atoms/Button/Button';
import DropdownComponent from 'components/atoms/Dropdown';
import SearchBar from 'components/atoms/SearchBar/SearchBar';
import { DPIconAdd, DPIconDropDown } from 'icons';
import React, { useState } from 'react';
import { datas1 } from 'utilities/overviewData';
import { ActionWrapper, Delete, HeaderWrapper, HeadingAction } from './styles';

function TableHeader({
  title,
  header,
  setOpen,
  onChange,
  selectRow,
  subMenuTableHeader,
  setOpenDeleteModal,
  show
}) {
  const [selected, setSelected] = useState('Filters');
  const [dropDown, setDropDown] = useState(false);
  const handleDelete = () => {
    setOpenDeleteModal(true);
    setDropDown(false);
  };
  return (
    <HeaderWrapper>
      <HeadingAction>
        {show ? <h2 className="heading">{selectRow}</h2> : <h2 className="heading">{header}</h2>}
        <div className="container">
          {show && (
            <Button onClick={() => setDropDown(!dropDown)} className="dropdown-btn">
              Action <DPIconDropDown className="icon-dropdown" />
            </Button>
          )}
          {dropDown && (
            <ActionWrapper>
              <Delete onClick={handleDelete}>Delete</Delete>
            </ActionWrapper>
          )}
        </div>
      </HeadingAction>
      <div className="header">
        {subMenuTableHeader ? (
          ''
        ) : (
          <>
            <DropdownComponent selected={selected} setSelected={setSelected} data={datas1} />
            <SearchBar onChange={onChange} />
          </>
        )}
        <Button className="header__header-btn" onClick={() => setOpen(true)}>
          <DPIconAdd className="header__header-btn--icon" />
          {title}
        </Button>
      </div>
    </HeaderWrapper>
  );
}

export default TableHeader;
