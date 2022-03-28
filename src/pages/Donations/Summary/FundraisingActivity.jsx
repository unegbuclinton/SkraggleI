import Card from "components/atoms/Card";
import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import { COLORS } from "constants/colors";
import React from "react";
import styled from "styled-components";

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
    <FRAContainer>
      <FRAHeaderWrapper>
        <h2>Fundraising Activity</h2>
        <CustomDropdown className="date-dropdown" data={data} />
      </FRAHeaderWrapper>
    </FRAContainer>
  );
};

export default FundraisingActivity;

const FRAContainer = styled(Card)`
  padding: 0 1.6rem;
  margin-top: 1.6rem;
`;

const FRAHeaderWrapper = styled(Card)`
  padding: 0.8rem 1.6rem 1.2rem 0;
  margin-top: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    background: ${COLORS.torquoise};
    height: 1px;
    width: 100%;
    max-width: 108.2rem;
    bottom: 0;
    left: 0;
  }
`;
