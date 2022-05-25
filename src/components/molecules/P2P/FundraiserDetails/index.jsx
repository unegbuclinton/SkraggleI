import { React, useState } from 'react';
import Header from '../P2PTabs';
import PauseP2PModal from '../PauseP2PModal';
import FundraiserMain from './FundraiserMain';
import { MainWrapper } from './styles';
const FundraiserDetails = () => {
  const tabs = [
    {
      title: 'P2P Fundrasier',
      path: 'p2pfund'
    },
    {
      title: 'Setting',
      path: 'settings'
    },
    {
      title: 'Source',
      path: 'source'
    },
    {
      title: 'Custom fields',
      path: 'custom'
    },
    {
      title: 'Donations',
      path: 'donations'
    },
    {
      title: 'Recurring Plans',
      path: 'recurring'
    },
    {
      title: 'Emails'
    }
  ];

  const [activeState, setActiveState] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <MainWrapper>
      <Header
        setActiveState={setActiveState}
        tabs={tabs}
        className="p2p-tabs-wrapper"
        verticalWrapper="p2p-tabs"
        leftBottomClass="p2p-tabs__bottom"
        onClick={() => setModalIsOpen(true)}>
        Pause P2P Fundraiser
      </Header>
      {modalIsOpen && (
        <PauseP2PModal
          isShown={modalIsOpen}
          onClose={() => {
            setModalIsOpen(false);
          }}
        />
      )}
      <FundraiserMain activeState={activeState} />
    </MainWrapper>
  );
};
export default FundraiserDetails;
