import Card from 'components/atoms/Card';
import CustomDropdown from 'components/atoms/CustomDropdown/CustomDropdown';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

const DashboardContentCard = ({ headerText, dropdownData, children }) => {
  console.log(dropdownData);
  return (
    <DashboardContentContainer>
      <DashboardHeaderWrapper>
        <span>{headerText}</span>
        {dropdownData && <CustomDropdown data={dropdownData} />}
      </DashboardHeaderWrapper>
      <DashboardContentWrapper>{children}</DashboardContentWrapper>
    </DashboardContentContainer>
  );
};

export default DashboardContentCard;

const DashboardContentContainer = styled(Card)`
  padding: ${({ dropdownData }) =>
    dropdownData ? '0 1.6rem 0 4rem' : '0 4.7rem 0 4.1rem'};
  margin-top: 1.6rem;
`;

const DashboardHeaderWrapper = styled.div`
  padding: ${({ dropdownData }) =>
    dropdownData ? '0.8rem 1.6rem 1.2rem 0' : ' 2.4rem 0 1.7rem 0'};
  /* margin-left: 2.4rem; */
  margin-bottom: 2.4rem;
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['header-grey']};
  font-weight: ${FONTWEIGHTS.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    background: ${COLORS.torquoise};
    height: 1px;
    width: calc(100% - 3.1rem);
    bottom: 0;
    left: 0;
  }
`;

const DashboardContentWrapper = styled.div``;
