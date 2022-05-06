import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { React, useState } from 'react';
import styled, { css } from 'styled-components';

function RenderComponent(Components, IncrementTab, DecrementTab) {
  return <Components IncrementTab={IncrementTab} DecrementTab={DecrementTab} />;
}
function MultiformTabs({ tabs, ...rest }) {
  const [activeTab, setActiveTab] = useState(0);

  function IncrementTab() {
    setActiveTab((prev) => prev + 1);
  }

  function DecrementTab() {
    setActiveTab((prev) => prev - 1);
  }

  return (
    <>
      <TabContainer {...rest}>
        {tabs?.map((tab, index) => (
          <TabButton
            key={index}
            disabled
            active={activeTab >= index}
            onClick={() => {
              setActiveTab(index);
            }}>
            {tab.name}
          </TabButton>
        ))}
      </TabContainer>
      <TabContent>
        {tabs && RenderComponent(tabs[activeTab]?.component, IncrementTab, DecrementTab)}
      </TabContent>
    </>
  );
}

export default MultiformTabs;

const TabContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 3.2rem 0 0.7rem 0;
`;
const TabButton = styled.button`
  width: 100%;
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.medium};
  border: none;
  position: relative;
  background: transparent;
  border-bottom: 2px solid ${COLORS.torquoise};
  color: ${COLORS['grey-400']};
  &::after {
    position: absolute;
    content: '';
    width: 0;
    height: 2px;
    background: ${COLORS.pink};
    bottom: -0.3rem;
    z-index: 100;
    left: 0;
    transition: 0.3s;
  }
  ${({ active }) =>
    active &&
    css`
      font-weight: ${FONTWEIGHTS.bold};
      color: ${COLORS.pink};
      cursor: default;
      &::after {
        width: 100%;
        transition: 0.3s;
      }
    `};
`;
const TabContent = styled.div``;
