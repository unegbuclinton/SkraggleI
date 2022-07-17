import Button from 'components/atoms/Button/Button';
import SelectDropDown from 'components/atoms/GenericDropdown';
import SearchBar from 'components/atoms/SearchBar/SearchBar';
import { DPIconAdd, DPIconDelete, DPIconDropDown } from 'icons';
import React, { useEffect, useRef, useState } from 'react';
import {
  ActionContentWrapper,
  ActionWrapper,
  BtnContainer,
  Delete,
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
  attendeeButton,
  invert
}) {
  const [dropDown, setDropDown] = useState(false);
  const [attendeeDropdown, setAttendeeDropdown] = useState(false);
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
      if (attendeeDropdown && ref.current && !ref.current.contains(e.target)) {
        setAttendeeDropdown(false);
      }
    };

    document.body.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.body.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [dropDown, attendeeDropdown]);
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

              {add && (
                <ActionContentWrapper onClick={onClick}>
                  <DPIconDelete className="delete-icon" />
                  <Delete>Archive</Delete>
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
            {!eventHeader ? (
              <SelectDropDown
                className="select-dropdown"
                classNamePrefix="react-select"
                placeholder={!invert ? 'Filter' : 'Action'}
              />
            ) : (
              ''
            )}
            {!invert && <SearchBar onChange={onChange} />}
          </>
        )}
        {!attendeeButton ? (
          <Button invert={invert} className="header__header-btn" onClick={() => setOpen(true)}>
            {!invert && <DPIconAdd className="header__header-btn--icon" />}
            {title}
          </Button>
        ) : (
          <DropdownContainer ref={ref}>
            <Button
              className="header-button"
              onClick={() => setAttendeeDropdown(!attendeeDropdown)}>
              {title}
              <DPIconDropDown className="dropdown-icon" />
            </Button>
            {attendeeDropdown && (
              <ActionWrapper className="content-container">
                <Button className="drop-button" auth invert>
                  Print Event Report
                </Button>
                <Button className="drop-button" auth invert>
                  Send Email to Attendees
                </Button>
                <DropdownInfo>Download Ticket Holder List</DropdownInfo>
                <BtnContainer>
                  <Button className="drop-button" auth invert>
                    CSV
                  </Button>
                  <Button className="drop-button" auth invert>
                    Excel
                  </Button>
                </BtnContainer>
              </ActionWrapper>
            )}
          </DropdownContainer>
        )}
      </div>
    </HeaderWrapper>
  );
}

export default TableHeader;
