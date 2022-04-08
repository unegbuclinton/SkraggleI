import React, { useState } from "react";
import styled,{css} from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";

function VerticalTab({ tabs, setActiveState, className, verticalWrapper }) {
  const [activeWidget, setActiveWidget] = useState(0);
  return (
    <VerticalTabWrapper className={className}>
      <div className={verticalWrapper}>
        {tabs.map(({ title }, index) => (
          <TabButton
            key={index}
            active={activeWidget === index}
            onClick={() => {
              setActiveWidget(index)
              setActiveState(index)
            }}
          >
            {title}
          </TabButton>
        ))}
      </div>

      <div className="content-wrapper" activeWidget={activeWidget}> {tabs && tabs[activeWidget]?.component}</div>
    </VerticalTabWrapper>
  );
}

export default VerticalTab;

const VerticalTabWrapper = styled.div`
  display: flex;
  gap: 7.4rem;
  border-bottom: 1px solid ${COLORS.torquoise};
  .vertical-tab-wrapper {
    display: flex;
    flex-direction: column;
    margin: 4.004rem 0 0 5.4rem;
  }
`;

const TabButton = styled.button`
  position: relative;
  width: 10.3rem;
  height: 1.7rem;
  font-size: ${FONTSIZES.normal};
  font-weight: ${FONTWEIGHTS.medium};
  color: ${COLORS["moore-grey"]};
  margin-bottom: 4.8rem;
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
        top: .3rem;
        left: -1.9rem;
        width: 1.1rem;
        height: 1.1rem;
        border-radius: 50%;
        background-color: ${COLORS.pink};
      }
    `};
`;
