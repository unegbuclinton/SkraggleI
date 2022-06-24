import Modal from 'components/layouts/Modal';
import RecurringAssociation from 'components/molecules/DonationModals/Recurring/RecurringAssociation';
import RecurringInformation from 'components/molecules/DonationModals/Recurring/RecurringInfomation';
import MultiformTabs from 'components/molecules/MultiformTabs';
import { useFormik } from 'formik';
import React from 'react';

function RecurringModal({ onCloseModal }) {
  const formik = useFormik({});
  const tabs = [
    {
      name: 'DONATION INFORMATION',
      component: RecurringInformation,
      props: { formik }
    },
    {
      name: 'ASSOCIATIONS ',
      component: RecurringAssociation,
      props: { formik }
    }
  ];

  return (
    <Modal header="Recurring" isShown hide={onCloseModal} showClose={onCloseModal}>
      <MultiformTabs tabs={tabs} />
    </Modal>
  );
}
export default RecurringModal;
