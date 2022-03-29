import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Card from '../../atoms/Card';
const Tabs = ({ tabs, ...rest }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <TabWrapper>
      <TabContainer {...rest}>
        {tabs?.map((tab, index) => (
          <TabButton
            key={index}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </TabButton>
        ))}
      </TabContainer>
      {tabs && tabs[activeTab]?.component}
    </TabWrapper>
  );
};

const TabWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const TabContainer = styled(Card)`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 3.204rem 2.5rem 1.6rem;
  margin-bottom: 1.6rem;
`;
const TabButton = styled.button`
  width: 14.4rem;
  height: 100%;
  border: none;
  position: relative;
  display: inline-block;
  cursor: pointer;
  background: transparent;
  padding-bottom: 1.296rem;
  color: ${COLORS["grey-400"]};
  font-weight: ${FONTWEIGHTS.medium};
  font-size: ${FONTSIZES.small};
  text-transform: capitalize;

  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 2px;
    background: ${COLORS.pink};
    bottom: 0px;
    z-index: 100;
    left: 0;
  }
  ${({ active }) =>
    active &&
    css`
      font-weight: ${FONTWEIGHTS.bold};
      cursor: default;
      &::after {
        width: 100%;
        transition: 0.3s;
      }
    `};
`;

export default Tabs;