/* eslint-disable no-unused-vars */
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconDropDown, DPIconForm } from 'icons';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Card from '../../atoms/Card';
const Tabs = ({ tabs, stickyTab, plainTab, title, heading, link, inline, scroll, ...rest }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [dropdown, setDropdown] = useState(false);
  const [subTab, setSubTab] = useState();

  return (
    <TabWrapper scroll={scroll}>
      <TabContainer inline={inline} className={stickyTab ? 'sticky-header' : ''} {...rest}>
        {plainTab ? (
          <PlainTabContainer>
            <TitleWrapper>
              <div>
                <PlainTabText>{title}</PlainTabText>
                <PlainTabHeading>{heading}</PlainTabHeading>
              </div>
              <TabLinkWrapper>
                <PlainTabLink>{link}</PlainTabLink>
                <DPIconForm />
              </TabLinkWrapper>
            </TitleWrapper>
          </PlainTabContainer>
        ) : (
          <div className="container">
            {tabs?.map((tab, index) => (
              <TabButton
                inline={inline}
                key={index}
                active={activeTab === index}
                onClick={() => setActiveTab(index)}>
                {tab.title}
                <span onClick={() => setDropdown(!dropdown)}>{tab.name}</span>
                <span onClick={() => setDropdown(!dropdown)}>
                  {tab.name && <DPIconDropDown className="drop-down" />}
                </span>
                {tab.name && (
                  <div>
                    {dropdown && (
                      <DropDownWrapper>
                        {tab.children.map((child, index) => (
                          <p key={index}>{child.childname}</p>
                        ))}
                      </DropDownWrapper>
                    )}
                  </div>
                )}
              </TabButton>
            ))}
          </div>
        )}
        {tabs[activeTab]?.actionComponent && <span>{tabs[activeTab]?.actionComponent}</span>}
      </TabContainer>
      <TabContent>{tabs && tabs[activeTab]?.component}</TabContent>
    </TabWrapper>
  );
};

const TabWrapper = styled.div`
  width: 100%;
  height: ${({ scroll }) => (scroll ? '100%' : '')};
  .sticky-header {
    position: -webkit-sticky;
    position: sticky;
    top: -2rem;
    z-index: 1;
    overflow-x: auto;
    .container {
      display: flex;
      flex-wrap: nowrap;
    }
  }
`;

const TabContainer = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3.204rem 2.5rem 1.6rem;
  overflow-x: auto;
  .container {
    display: flex;
    flex-wrap: nowrap;
  }

  ${({ inline }) =>
    inline &&
    css`
      padding: 0;
      padding-top: 3.2rem;

      .container {
        padding-left: 2.9rem;
        width: 100%;
        border-bottom: 2px solid ${COLORS.torquoise};
      }
    `};
`;
const TabButton = styled.button`
  width: 14.4rem;
  height: 100%;
  border: none;
  /* position: relative; */
  display: inline-block;
  cursor: pointer;
  background: transparent;
  padding-bottom: 1.296rem;
  color: ${COLORS['grey-400']};
  font-weight: ${FONTWEIGHTS.medium};
  font-size: ${FONTSIZES.small};
  text-transform: capitalize;
  .drop-down {
    fill: ${COLORS['grey-400']};
    margin-left: 0.5rem;
  }

  ${({ inline }) =>
    inline &&
    css`
  width: fit-content;
  margin-right: 1.6rem;
  padding-bottom: .7rem;
      }
    `};

  &::after {
    position: absolute;
    content: '';
    width: 0;
    height: 2px;
    background: ${COLORS.pink};
    bottom: 0px;
    z-index: 1;
    left: 0;

    ${({ inline }) =>
      inline &&
      css`
      height: 1px;
      bottom: 0px;
      }
    `};
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

const PlainTabContainer = styled.div`
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PlainTabText = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  line-height: 1.6rem;
  color: ${COLORS['grey-400']};
  padding-bottom: 1rem;
`;

const PlainTabHeading = styled.h1`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.xxlarge};
  color: ${COLORS.deepPurple};
  line-height: 2.8rem;
  padding-bottom: 2rem;
`;

const PlainTabLink = styled.p`
  font-weight: ${FONTWEIGHTS.bold};
  font-size: ${FONTSIZES.small};
  color: ${COLORS.pink};
`;

const TabLinkWrapper = styled.div`
  background-color: ${COLORS['error-background']};
  width: 21rem;
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.2rem;
`;

const TabContent = styled.div`
  height: 90%;
  overflow: hidden;
`;

const DropDownWrapper = styled.div`
  /* position: fixed;
  background-color: ${COLORS.white};
  z-index: 2;
  width: 15rem;
  display: block;
  padding-bottom: 0.5rem;
  .child-container {
    p {
      /* margin-bottom: 1rem; */
      /* padding: 0.7rem;
      &:hover {
        background-color: ${COLORS['garage-mix-grey']};
      }
    } */
  } */
`;

export default Tabs;
