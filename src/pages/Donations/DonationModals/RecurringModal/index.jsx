import Modal from 'components/layouts/Modal';
import RecurringAssociation from 'components/molecules/DonationModals/Recurring/RecurringAssociation';
import RecurringInformation from 'components/molecules/DonationModals/Recurring/RecurringInfomation';
import MultiformTabs from 'components/molecules/MultiformTabs';
import { addRecurringTransaction, getRecurringTransaction } from 'features/donation/donationSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';

function RecurringModal({ onCloseModal }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      contact: '',
      giftType: '',
      totalAmount: '',
      paymentMethod: '',
      campaign: '',
      impactArea: '',
      bill: '',
      billInterval: '',
      reciept: '',
      dedication: '',
      note: ''
    },
    onSubmit: (values) => {
      const body = {
        amount: values.totalAmount,
        currency: 'usd',
        is_from_different_currency: false,
        type: values.giftType,
        payment_method: values.paymentMethod,
        dedication: values.dedication,
        notes: values.note,
        receipting_strategy: values.reciept,
        campaign_id: values.campaign,
        contact_id: values.contact,
        billing_cycle: values.bill,
        billing_interval: values.billInterval,
        is_revenue: false
      };

      dispatch(addRecurringTransaction(body)).then(() => {
        dispatch(getRecurringTransaction());
        onCloseModal();
      });
    }
  });
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
