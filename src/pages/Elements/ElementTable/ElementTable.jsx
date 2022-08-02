import Table from 'components/layouts/Table';
import ButtonGroupModal from 'components/molecules/ElementModal/ButtonGroupModal';
import DonateModal from 'components/molecules/ElementModal/DonateButtonModal';
import DonateLinkModal from 'components/molecules/ElementModal/DonateLinkModal';
import DonationFormModal from 'components/molecules/ElementModal/DonationForm';
import DonationLevelModal from 'components/molecules/ElementModal/DonationLevelModal';
import GoalMeterModal from 'components/molecules/ElementModal/GoalMeter';
import ImageCardModal from 'components/molecules/ElementModal/ImageCardModal';
import ImpactSliderModal from 'components/molecules/ElementModal/ImpactSliderModal';
import MessageBarModal from 'components/molecules/ElementModal/MessageBarModal';
import NewElementModal from 'components/molecules/ElementModal/NewElementModal';
import P2PButtonsModal from 'components/molecules/ElementModal/P2PButtons';
import P2PLinkModal from 'components/molecules/ElementModal/P2PLinkModal';
import QrCodeModal from 'components/molecules/ElementModal/QrCodeModal';
import RecentDonationModal from 'components/molecules/ElementModal/RecentDonation';
import ReminderModal from 'components/molecules/ElementModal/ReminderModal';
import SimpleFormModal from 'components/molecules/ElementModal/SimpleFormModal';
import SocialProofModal from 'components/molecules/ElementModal/SocialProofModal';
import StartCounterModal from 'components/molecules/ElementModal/StartCounterModal';
import StickyButtonModal from 'components/molecules/ElementModal/StickyButtonModal';
import TopFundraiserModal from 'components/molecules/ElementModal/TopFundraiserModal';
import TopSupportersModal from 'components/molecules/ElementModal/TopSupporters';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { ElementContextProvider } from 'context';
import { DPIconDonationDash, DPIconDonationEye, DPIconDonationMore } from 'icons';
import React, { useState } from 'react';
import { ElementsWrapper } from './styles';

function ElementTable() {
  const [open, setOpen] = useState(false);
  const [openDonateButton, setOpenDonateButton] = useState(false);
  const [openDonateLink, setOpenDonateLink] = useState(false);
  const [openStckyButton, setOpenStickyButton] = useState(false);
  const [openReminderModal, setOpenReminderModal] = useState(false);
  const [openDonationFormModal, setOpenDonationFormModal] = useState(false);
  const [openSimpleForm, setOpenSimpleForm] = useState(false);
  const [openImageCard, setOpenImageCard] = useState(false);
  const [openGoalMeter, setOpenGoalMeter] = useState(false);
  const [openStartCounter, setOpenStartCounter] = useState(false);
  const [openMessageBarModal, setOpenMessageBarModal] = useState(false);
  const [openSupporterModal, setOpenSupporterModal] = useState(false);
  const [openSocialProofModal, setOpenSocialProofModal] = useState(false);
  const [openQrCodeModal, setOpenQrCodeModal] = useState(false);
  const [openRecentDonation, setOpenRecentDonation] = useState(false);
  const [openP2pButtons, setOpenP2pButtons] = useState(false);
  const [openP2pLink, setOpenP2pLink] = useState(false);
  const [openTopFundRaiser, setOpenTopFunRaiser] = useState(false);
  const [openImpactSlider, setOpenImpactSlider] = useState(false);
  const [openDonationLevels, setOpenDonationLevels] = useState(false);
  const [openButtonGroup, setOpenButtonGroup] = useState(false);
  const columns = [
    {
      name: 'ID',
      selector: (row) => row?.id
    },
    {
      name: 'NAME',
      selector: (row) => row?.name
    },
    {
      name: 'TYPE',
      cell: (row) => <TypeComponent text={row.type} />
    },

    {
      name: 'CAMPAIGN',
      selector: (row) => row?.campaign
    },
    {
      name: '1M STATISTICS',
      cell: (row) => <StatisticComponent text={row.statistics} />
    },
    {
      name: 'LAST SEEN',
      selector: (row) => row?.last_seen,
      width: '120px'
    },
    {
      name: '',
      cell: () => <MoreComp />,
      width: '50px'
    }
  ];

  const data = [
    {
      id: 'XZ4345RFDC',
      name: 'Elements',
      type: 'null',
      campaign: 'statistics',
      statistics: '0',
      last_seen: '-'
    },
    {
      id: 'XZ4345YXS',
      name: 'Elements',

      type: 'null',
      campaign: 'statistics',
      statistics: '0',
      last_seen: '-'
    },
    {
      id: 'XZ4345FTRE ',
      name: 'Elements',
      statistics: '0',
      type: 'null',
      campaign: 'statistics',
      last_seen: '-'
    }
  ];
  return (
    <ElementContextProvider>
      <ElementsWrapper>
        <DonateModal isShown={openDonateButton} onClose={() => setOpenDonateButton(false)} />
        <DonateLinkModal isShown={openDonateLink} onClose={() => setOpenDonateLink(false)} />
        <StickyButtonModal isShown={openStckyButton} onClose={() => setOpenStickyButton(false)} />
        <ReminderModal isShown={openReminderModal} onClose={() => setOpenReminderModal(false)} />
        <SocialProofModal
          isShown={openSocialProofModal}
          onClose={() => setOpenSocialProofModal(false)}
        />
        <MessageBarModal
          isShown={openMessageBarModal}
          onClose={() => setOpenMessageBarModal(false)}
        />
        <QrCodeModal isShown={openQrCodeModal} onClose={() => setOpenQrCodeModal(false)} />
        <DonationLevelModal
          isShown={openDonationLevels}
          onClose={() => setOpenDonationLevels(false)}
        />
        <ButtonGroupModal isShown={openButtonGroup} onClose={() => setOpenButtonGroup(false)} />
        <DonationFormModal
          isShown={openDonationFormModal}
          onClose={() => setOpenDonationFormModal(false)}
        />
        <SimpleFormModal isShown={openSimpleForm} onClose={() => setOpenSimpleForm(false)} />
        <ImageCardModal isShown={openImageCard} onClose={() => setOpenImageCard(false)} />
        <GoalMeterModal isShown={openGoalMeter} onClose={() => setOpenGoalMeter(false)} />
        <StartCounterModal isShown={openStartCounter} onClose={() => setOpenStartCounter(false)} />
        <ImpactSliderModal isShown={openImpactSlider} onClose={() => setOpenImpactSlider(false)} />
        <TopSupportersModal
          isShown={openSupporterModal}
          onClose={() => setOpenSupporterModal(false)}
        />
        <RecentDonationModal
          isShown={openRecentDonation}
          onClose={() => setOpenRecentDonation(false)}
        />
        <P2PButtonsModal isShown={openP2pButtons} onClose={() => setOpenP2pButtons(false)} />
        <P2PLinkModal isShown={openP2pLink} onClose={() => setOpenP2pLink(false)} />
        <TopFundraiserModal
          isShown={openTopFundRaiser}
          onClose={() => setOpenTopFunRaiser(false)}
        />
        <NewElementModal
          isShown={open}
          setOpenDonateButton={setOpenDonateButton}
          setOpenDonateLink={setOpenDonateLink}
          setOpenStickyButton={setOpenStickyButton}
          setOpenReminderModal={setOpenReminderModal}
          setOpenSocialProofModal={setOpenSocialProofModal}
          setOpenMessageBarModal={setOpenMessageBarModal}
          setOpenQrCodeModal={setOpenQrCodeModal}
          setOpenDonationLevels={setOpenDonationLevels}
          setOpenButtonGroup={setOpenButtonGroup}
          setOpenDonationFormModal={setOpenDonationFormModal}
          setOpenSimpleForm={setOpenSimpleForm}
          setOpenImageCard={setOpenImageCard}
          setOpenGoalMeter={setOpenGoalMeter}
          setOpenStartCounter={setOpenStartCounter}
          setOpenImpactSlider={setOpenImpactSlider}
          setOpenSupporterModal={setOpenSupporterModal}
          setOpenRecentDonation={setOpenRecentDonation}
          setOpenP2pButtons={setOpenP2pButtons}
          setOpenP2pLink={setOpenP2pLink}
          setOpenTopFunRaiser={setOpenTopFunRaiser}
          onClose={() => setOpen(false)}
        />
        <TableHeader header="12 Elements" title="New element" setOpen={setOpen} />
        <Table columns={columns} data={data} pointer />
      </ElementsWrapper>
    </ElementContextProvider>
  );
}

const TypeComponent = ({ text }) => {
  return (
    <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', cursor: 'pointer' }}>
      <DPIconDonationEye />
      <p>{text}</p>
    </div>
  );
};

const StatisticComponent = ({ text }) => {
  return (
    <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
      {text}
      <DPIconDonationDash />
      {text}
      <DPIconDonationDash />
      {text}
    </div>
  );
};

const MoreComp = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ position: 'relative', cursor: 'pointer' }}
      onClick={() => setOpen((prev) => !prev)}>
      <DPIconDonationMore />
      {open && (
        <div
          style={{
            position: 'absolute',
            left: '-10.7rem',
            width: '11.5rem',
            height: '6.8rem',
            boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.15);',
            borderRadius: '.5rem',
            border: '1px solid #E6EFF1',
            background: '#ffff',
            zIndex: '5'
          }}>
          <p style={{ padding: '1rem 1rem .2rem 1rem', color: '#9A9AA9' }}>Clone</p>
          <p style={{ padding: '1rem 1rem .2rem 1rem', color: '#9A9AA9' }}>Archive</p>
        </div>
      )}
    </div>
  );
};

export default ElementTable;
