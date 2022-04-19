import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import { COLORS } from "constants/colors";
import Modal from "components/layouts/Modal";
import CompleteTransaction from "components/molecules/DonationModals/CreateTransaction/CompleteTransaction";
import DonationAssociation from "components/molecules/DonationModals/CreateTransaction/DonationAssociation";
import DonationInformation from "components/molecules/DonationModals/CreateTransaction/DonationInfomation";

function CreateTransactionModal({ onCloseModal }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "DONATION INFORMATION",
      component: (
        <DonationInformation
          onCloseModal={onCloseModal}
          onChangeModal={() => setActiveTab(1)}
        />
      ),
    },
    {
      name: "ASSOCIATIONS ",
      component: (
        <DonationAssociation
          onChangeModal={() => setActiveTab(2)}
          onRevertModal={() => setActiveTab(0)}
        />
      ),
    },
    {
      name: "COMPLETE TRANSACTION ",
      component: <CompleteTransaction onRevertModal={() => setActiveTab(1)} />,
    },
  ];
  return (
    <Modal header="Create a Transaction - Donation" isShown hide={onCloseModal}>
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

export default CreateTransactionModal;

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
