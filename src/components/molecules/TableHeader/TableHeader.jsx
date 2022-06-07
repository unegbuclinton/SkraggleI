import Button from 'components/atoms/Button/Button';
import SelectDropDown from 'components/atoms/GenericDropdown';
import SearchBar from 'components/atoms/SearchBar/SearchBar';
import { DPIconAdd, DPIconDelete, DPIconDropDown } from 'icons';
import React, { useEffect, useRef, useState } from 'react';
import {
  ActionContentWrapper,
  ActionWrapper,
  Delete,
  HeaderWrapper,
  HeadingAction
} from './styles';

function TableHeader({
  title,
  header,
  setOpen,
  onChange,
  selectRow,
  subMenuTableHeader,
  setOpenDeleteModal,
  show,
  eventHeader
}) {
  const [dropDown, setDropDown] = useState(false);
  const handleDelete = () => {
    setOpenDeleteModal(true);
    setDropDown(false);
  };
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (dropDown && ref.current && !ref.current.contains(e.target)) {
        setDropDown(false);
      }
    };

    document.body.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.body.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [dropDown]);
  return (
    <HeaderWrapper>
      <HeadingAction>
        {show ? <h2 className="heading">{selectRow}</h2> : <h2 className="heading">{header}</h2>}
        <div className="container" ref={ref}>
          {show && (
            <Button onClick={() => setDropDown(!dropDown)} className="dropdown-btn">
              Action <DPIconDropDown className="icon-dropdown" />
            </Button>
          )}
          {dropDown && (
            <ActionWrapper>
              <ActionContentWrapper onClick={handleDelete}>
                <DPIconDelete className="delete-icon" />
                <Delete>Delete</Delete>
              </ActionContentWrapper>
            </ActionWrapper>
          )}
        </div>
      </HeadingAction>
      <div className="header">
        {subMenuTableHeader ? (
          ''
        ) : (
          <>
            {!eventHeader ? (
              <SelectDropDown
                className="select-dropdown"
                classNamePrefix="react-select"
                placeholder="Filter"
              />
            ) : (
              ''
            )}
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
