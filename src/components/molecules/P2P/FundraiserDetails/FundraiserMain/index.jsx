import apiInstance from 'apiInstance';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CustomFields from '../Custom Fields';
import Donations from '../Donations';
import Emails from '../Emails';
import LeafLnc from '../LeafLnc';
import P2PFundraise from '../P2PFundraiser';
import Plans from '../Reccuring Plans';
import Settings from '../Settings';
import Source from '../Source';

const FundraiserMain = (props) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const response = await apiInstance({
        method: 'get',
        url: '/admin'
      });
      const data = response?.data?.message;
      setUserData(data);
      // store.set()
      // dispatch(addUserData(data));
    };

    getUser();
  }, []);
  const userName = `${userData?.first_name}  ${userData?.last_name}`;
  return (
    <RightSection>
      <LeafLnc
        supporter={userName}
        className={props.activeState === 0 ? 'active-div' : null}
        id="home"
      />
      <P2PFundraise
        supporter={userName}
        className={props.activeState === 0 ? 'active-div' : null}
        id="p2pfund"
      />
      <Settings className={props.activeState === 1 ? 'active-div' : null} />
      <Source supporter={userName} className={props.activeState === 2 ? 'active-div' : null} />
      <CustomFields className={props.activeState === 3 ? 'active-div' : null} />
      <Donations className={props.activeState === 4 ? 'active-div' : null} />
      <Plans className={props.activeState === 5 ? 'active-div' : null} />
      <Emails className={props.activeState === 6 ? 'active-div' : null} />
    </RightSection>
  );
};

export default FundraiserMain;

export const RightSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
  position: sticky;
  top: 0;
  overflow-y: auto;
  .active-div {
    border: 1px solid #ff576b;
  }
`;
