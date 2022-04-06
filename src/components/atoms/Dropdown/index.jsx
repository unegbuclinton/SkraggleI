import { COLORS } from "constants/colors";
import { FONTSIZES } from "constants/font-spec";
import { DPIconDropDown } from "icons";
import React, { useState } from "react";
import styled from "styled-components";

const DropdownComponent = ({
  selected,
  setSelected,
  data,
  className,
  ...rest
}) => {
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
    <DropdownWrapper className="dropdown">
      <div className="dropdown__btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span>
          <DPIconDropDown />
        </span>
      </div>
      {isActive && <div className="dropdown__content">{options}</div>}
    </DropdownWrapper>
  );
};

export default DropdownComponent;

export const DropdownWrapper = styled.div`
  width: 14.4rem;
  height: 4.8rem;
  margin-right: 1.6rem;
  position: relative;
  border: 1px solid ${COLORS["porcelain-white"]};
  cursor: pointer;
  .dropdown {
    &__btn {
      padding-top: 1.6rem;
      padding-left: 1.6rem;
      padding-right: 1.33rem;
      font-size: ${FONTSIZES.small};
      line-height: 16px;
      color: ${COLORS["grey-400"]};
      background: ${COLORS.white};
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__content {
      position: absolute;
      z-index: 1;
      top: 110%;
      left: 0;
      padding: 10px;
      background: ${COLORS.white};
      box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
      font-size: ${FONTSIZES.small};
      line-height: 16px;
      color: ${COLORS["grey-400"]};
      width: 100%;
    }
    &__item {
      padding: 10px;
      cursor: pointer;
    }
  }
`;
