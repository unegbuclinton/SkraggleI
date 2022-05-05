import { forwardRef, React } from 'react';
import styled from 'styled-components';
import CustomFields from '../Custom Fields';
import Donations from '../Donations';
import Emails from '../Emails';
import LeafLnc from '../LeafLnc';
import P2PFundraise from '../P2PFundraiser';
import Plans from '../Reccuring Plans';
import Settings from '../Settings';
import Source from '../Source';

const FundraiserMain = forwardRef((props, mainref, customref, settingref) => {
  return (
    <RightSection>
      <LeafLnc className={props.activeState === 0 ? 'active-div' : null} />
      <P2PFundraise
        className={props.activeState === 0 ? 'active-div' : null}
        ref={mainref}
      />
      <Settings
        className={props.activeState === 1 ? 'active-div' : null}
        ref={settingref}
      />
      <Source className={props.activeState === 2 ? 'active-div' : null} />
      <CustomFields
        className={props.activeState === 3 ? 'active-div' : null}
        ref={customref}
      />
      <Donations className={props.activeState === 4 ? 'active-div' : null} />
      <Plans className={props.activeState === 5 ? 'active-div' : null} />
      <Emails className={props.activeState === 6 ? 'active-div' : null} />
    </RightSection>
  );
});

export default FundraiserMain;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  .active-div {
    border: 1px solid #ff576b;
  }
`;
