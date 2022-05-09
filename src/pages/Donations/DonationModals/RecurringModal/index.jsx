import React from 'react';
import Modal from 'components/layouts/Modal';
import RecurringAssociation from 'components/molecules/DonationModals/Recurring/RecurringAssociation';
import RecurringInformation from 'components/molecules/DonationModals/Recurring/RecurringInfomation';
import MultiformTabs from 'components/molecules/MultiformTabs';

function RecurringModal({ onCloseModal }) {
  const tabs = [
    {
      name: 'DONATION INFORMATION',
      component: RecurringInformation
    },
    {
      name: 'ASSOCIATIONS ',
      component: RecurringAssociation
    }
  ];

  return (
    <Modal header="Recurring" isShown hide={onCloseModal} showClose={onCloseModal}>
      <MultiformTabs tabs={tabs} />
    </Modal>
  );
}
export default RecurringModal;
