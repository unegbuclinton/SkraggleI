import { COLORS } from 'constants/colors';
import { FONTSIZES } from 'constants/font-spec';
import { DPIconDropDown } from 'icons';
import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownComponent = ({ data, className, content, iconDropdown, onChange, selected, setSelected, ...rest }) => {
  const [isActive, setIsActive] = useState(false);

  let options = data.map((option) => (
    <div
      onClick={(e) => {
        setSelected(option.name);
        setIsActive(false);
      }}
      className="dropdown__item"
    >
      {option.name}
    </div>
  ));

  return (
    <DropdownWrapper className={className} onChange={onChange}>
      <div className="dropdown__btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span>
          <DPIconDropDown className={iconDropdown}/>
        </span>
      </div>
      {isActive && <div className={`dropdown__content ${content ? "dropdown__content-large" : ""}`}>{options}</div>}
    </DropdownWrapper>
  );
};

export default DropdownComponent;

export const DropdownWrapper = styled.div`
  width: 14.4rem;
  height: 4.8rem;
  position: relative;
  border: 1px solid ${COLORS["porcelain-white"]};
  color: ${COLORS["grey-400"]};
  padding-top: 1.6rem;
  padding-left: 1.6rem;
  padding-right: 1.33rem;
  font-size: ${FONTSIZES.small};
  line-height: 16px;
  cursor: pointer;
  .dropdown {
    &__btn {
      background: ${COLORS.white};
      display: flex;
      justify-content: space-between;
    }
    &__content {
      position: absolute;
      z-index: 1;
      top: 110%;
      left: 0;
      background: ${COLORS.white};
      box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
      font-size: ${FONTSIZES.small};
      line-height: 16px;
      color: ${COLORS['grey-400']};
      width: 100%;
    }
    &__content-large{
      top: 110%;
      background: ${COLORS.white};
      box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
      font-size: ${FONTSIZES.small};
      line-height: 16px;
      color: ${COLORS["grey-400"]};
      width: 140%;
    }
    &__item {
      padding: 10px;
      cursor: pointer;
      &:hover {
        background-color: ${COLORS.torquoise};
      }
    }
  }
`;
