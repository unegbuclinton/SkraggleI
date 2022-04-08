import { React, useEffect, useRef } from "react";

import styled from "styled-components";

import LeafLnc from "../LeafLnc";
import P2PFundraise from "../P2PFundraiser";
import Settings from "../Settings";
import Source from "../Source";
import CustomFields from "../Custom Fields";
import Donations from "../Donations";
import Plans from "../Reccuring Plans";
import Emails from "../Emails";


const FundraiserMain = (props) => {
  return (
    <RightSection>
      <LeafLnc className={props.activeState === 0 ? "active-div" : null} />
      <P2PFundraise className={props.activeState === 0 ? "active-div" : null} />
      <Settings className={props.activeState === 1 ? "active-div" : null} />
      <Source
        className={props.activeState === 2 ? "active-div" : null}
      />
      <CustomFields className={props.activeState === 3 ? "active-div" : null} />
      <Donations className={props.activeState === 4 ? "active-div" : null} />
      <Plans className={props.activeState === 5 ? "active-div" : null} />
      <Emails/>
    </RightSection>
  );
};

export default FundraiserMain;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  .active-div {
    border: 1px solid #ff576b;
  }
`;
