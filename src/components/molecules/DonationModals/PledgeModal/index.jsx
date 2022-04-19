import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import { COLORS } from "constants/colors";
import Modal from "components/layouts/Modal";
import PledgeInfoModalComponent from "../PledgeInfrormationModalComponent";
import PledgeAssociateModalComponent from "../PledgeAssociationModalComponent";

function PledgeModal({ onCloseModal }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "PLEDGE INFORMATION",
      component: (
        <PledgeInfoModalComponent
          onChangeModal={() => setActiveTab(1)}
        />
      ),
    },
    {
      name: "ASSOCIATIONS ",
      component: (
        <PledgeAssociateModalComponent
          onRevertModal={() => setActiveTab(0)}
        />
      ),
    },
  ];
  return (
    <Modal header="Pledge" isShown hide={onCloseModal}>
      {/* <MultiformTabs tabs={tabs}/> */}
      <TabContainer>
        {tabs.map((tab, index) => (
          <TabButton
            disabled
            key={index}
            active={activeTab >= index}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            {tab.name}
          </TabButton>
        ))}
      </TabContainer>
      <TabContent>{tabs && tabs[activeTab]?.component}</TabContent>
    </Modal>
  );
}
export default PledgeModal;

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
  color: ${COLORS["grey-400"]};
  &::after {
    position: absolute;
    content: "";
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

