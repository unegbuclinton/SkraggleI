import Card from 'components/atoms/Card';
import DashboardContentCard from 'components/molecules/DashboardContentCard';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

const FundraisingActivity = () => {
  const data = [
    {
      name: "Today",
    },
    {
      name: "Yesterday",
    },
    {
      name: "Last 7 Days",
    },
    {
      name: "Last 14 Days",
    },
    {
      name: "Last 30 Days",
    },
    {
      name: "This Week",
    },
    {
      name: "This Month",
    },
    {
      name: "This Year",
    },
  ];
  return (
    <DashboardContentCard
      headerText="Fundraising Activity"
      dropdownData={data}
    ></DashboardContentCard>
    // <FRAContainer>
    //   <FRAHeaderWrapper>
    //     <h2>Fundraising Activity</h2>
    //     <CustomDropdown data={data} />
    //   </FRAHeaderWrapper>
    //   <FRAContentWrapper>
    //     <div className="data-wrapper">
    //       <h3>$25,000</h3>
    //       <p>NEW DONATIONS</p>
    //     </div>
    //     <div className="data-wrapper">
    //       <h3>$477</h3>
    //       <p>NEW DONATIONS</p>
    //     </div>
    //     <div className="data-wrapper">
    //       <h3>14</h3>
    //       <p>NEW DONATIONS</p>
    //     </div>
    //   </FRAContentWrapper>
    // </FRAContainer>
  );
};

export default FundraisingActivity;

const FRAContainer = styled(Card)`
  padding: 0 1.6rem;
  margin-top: 1.6rem;
`;

const FRAHeaderWrapper = styled.div`
  padding: 0.8rem 1.6rem 1.2rem 0;
  margin-left: 2.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    background: ${COLORS.torquoise};
    height: 1px;
    width: calc(100% - 3.1rem);
    bottom: 0;
    left: 0;
  }
`;

const FRAContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12.367rem;
  padding: 5.227rem 7.427rem;
  text-align: center;

  .data-wrapper {
    h3 {
      font-size: ${FONTSIZES.xxlarge};
      font-weight: ${FONTWEIGHTS.bold};
      margin-bottom: 2.246rem;
    }

    p {
      color: ${COLORS['snooze-grey']};
      text-transform: uppercase;
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHTS.medium};
    }
  }
`;
