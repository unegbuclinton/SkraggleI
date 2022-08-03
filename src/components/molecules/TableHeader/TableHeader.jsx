/* eslint-disable no-unused-vars */
import Button from 'components/atoms/Button/Button';
import SelectDropDown from 'components/atoms/GenericDropdown';
import SearchBar from 'components/atoms/SearchBar/SearchBar';
import ActionDropdown from 'components/organisms/Action';
import AttendeeAction from 'components/organisms/AttendeeAction';
import { DPIconAdd, DPIconArchived, DPIconDelete, DPIconDropDown } from 'icons';
import React, { useEffect, useRef, useState } from 'react';
import {
  Action,
  ActionContainer,
  ActionContentWrapper,
  ActionWrapper,
  BtnContainer,
  DropdownContainer,
  DropdownInfo,
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
  eventHeader,
  onClick,
  add,
  buttonDropdown,
  noFilter,
  disableFilterBtn,
  invert,
  filter,
  attendeeDropdown
}) {
  const [dropDown, setDropDown] = useState(false);
  const [dropdownButton, setDropdownButton] = useState(false);
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
      if (dropdownButton && ref.current && !ref.current.contains(e.target)) {
        setDropdownButton(false);
      }
    };

    document.body.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.body.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [dropDown, dropdownButton]);
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
              <ActionContentWrapper>
                <ActionContainer onClick={handleDelete}>
                  <DPIconDelete className="delete-icon" />
                  <Action>Delete</Action>
                </ActionContainer>
                <ActionContainer>
                  <DPIconArchived className="achived-icon" />
                  <Action>Archive</Action>
                </ActionContainer>
              </ActionContentWrapper>

              {add && (
                <ActionContentWrapper onClick={onClick}>
                  <ActionContainer>
                    <DPIconDelete className="delete-icon" />
                    <Action>Archive</Action>
                  </ActionContainer>
                </ActionContentWrapper>
              )}
            </ActionWrapper>
          )}
        </div>
      </HeadingAction>
      <div className="header">
        {subMenuTableHeader ? (
          ''
        ) : (
          <>
            {!eventHeader & !noFilter & !disableFilterBtn ? (
              <SelectDropDown
                className="select-dropdown"
                isSearchable={false}
                classNamePrefix="react-select"
                placeholder={!invert ? `${filter}` : 'Action'}
              />
            ) : (
              ''
            )}
            {!invert && <SearchBar onChange={onChange} />}
          </>
        )}
        {!buttonDropdown ? (
          <>
            {!disableFilterBtn && (
              <Button invert={invert} className="header__header-btn" onClick={() => setOpen(true)}>
                {!invert && <DPIconAdd className="header__header-btn--icon" />}
                {title}
              </Button>
            )}
          </>
        ) : (
          <DropdownContainer ref={ref}>
            <Button className="header-button" onClick={() => setDropdownButton(!dropdownButton)}>
              {title}
              <DPIconDropDown className="dropdown-icon" />
            </Button>
            {dropdownButton && (
              <div>
                {!attendeeDropdown ? <ActionDropdown setOpen={setOpen} /> : <AttendeeAction />}
              </div>
            )}
          </DropdownContainer>
        )}
      </div>
    </HeaderWrapper>
  );
}

export default TableHeader;
