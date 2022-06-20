import DashboardLayout from 'components/layouts/DashboardLayout';
// import DonateModal from 'components/molecules/ElementsModal/DonateButton/Modal';
import NewElementModal from 'components/molecules/ElementsModal/Modal';
// import DonationSetup from 'components/molecules/Forms/donationSetup';
// import DonationSetupComponent from 'components/molecules/Forms/donationSetup/DonationSetupComponent';
// import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React, { useState } from 'react';
function Test() {
  const [open, setOpen] = useState(false);
  // const [openDonateModal, setOpenDonateModal] = useState(false);
  return (
    <DashboardLayout>
      {/* <DonationSetup /> */}
      <button onClick={() => setOpen(true)}>open</button>
      {/* <button onClick={() => setOpenDonateModal(true)}>open</button> */}
      {open && (
        <NewElementModal
          isShown={open}
          onClose={() => {
            setOpen(false);
          }}
        />
      )}
      {/* {openDonateModal && (
        <DonateModal
          isShown={openDonateModal}
          onClose={() => {
            setOpenDonateModal(false);
          }}
        />
      )} */}
    </DashboardLayout>
  );
}

export default Test;
