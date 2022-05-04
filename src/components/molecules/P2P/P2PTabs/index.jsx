import React, { useState } from "react";
import { Link } from "react-scroll";
import styled, { css } from "styled-components";
import { COLORS } from "constants/colors";

function Header({
  setActiveState,
  tabs,
  className,
  verticalWrapper,
  children,
  onClick,
  leftBottomClass,
}) {
  const [actives, setactives] = useState(0);
  return (
    <div>
      <VerticalTabWrapper className={className}>
        <div className={verticalWrapper}>
          {tabs.map(({ title, path }, index) => (
            <TabButton
              smooth={true}
              spy={true}
              key={index}
              to={path}
              active={actives === index}
              onClick={() => {
                setactives(index);
                setActiveState(index);
              }}
            >
              {title}
            </TabButton>
          ))}
        </div>
        <div className={leftBottomClass} onClick={onClick}>
          {children}
        </div>
      </VerticalTabWrapper>
    </div>
  );
}

export default Header;

export const VerticalTabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
export const TabButton = styled(Link)`
  position: relative;
  width: 10.3rem;
  height: 1.7rem;
  font-size: 14px;
  font-weight: bold;
  color: ${COLORS["gray-500"]};
  margin-bottom: 3.9rem;
  cursor: pointer;
  text-align: left;
  border: none;
  background: transparent;
  ${({ active }) =>
    active &&
    css`
      &::before {
        content: "";
        position: absolute;
        top: 0.3rem;
        left: -1.9rem;
        width: 1.1rem;
        height: 1.1rem;
        border-radius: 50%;
        background-color: ${COLORS.pink};
      }
      color: ${COLORS.pink};
    `};
`;