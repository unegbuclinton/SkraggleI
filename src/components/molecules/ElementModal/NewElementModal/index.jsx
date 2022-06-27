import Modal from 'components/layouts/Modal';
import React from 'react';
import NewElement from '../../ElementsModalsComponents/NewElement';

function NewElementModal({
  onClose,
  isShown,
  setOpenDonateButton,
  setOpenDonateLink,
  setOpenStickyButton,
  setOpenReminderModal,
  setOpenSocialProofModal,
  setOpenMessageBarModal,
  setOpenQrCodeModal,
  setOpenDonationLevels,
  setOpenButtonGroup,
  setOpenDonationFormModal,
  setOpenSimpleForm,
  setOpenImageCard,
  setOpenGoalMeter,
  setOpenStartCounter,
  setOpenImpactSlider,
  setOpenSupporterModal,
  setOpenRecentDonation,
  setOpenP2pButtons,
  setOpenP2pLink,
  setOpenTopFunRaiser
}) {
  return (
    <Modal header="New Elements" isShown={isShown} hide={onClose}>
      <NewElement
        hideModal={onClose}
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
      />
    </Modal>
  );
}

export default NewElementModal;
