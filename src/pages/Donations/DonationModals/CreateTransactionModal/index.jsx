import Modal from 'components/layouts/Modal';
import CompleteTransaction from 'components/molecules/DonationModals/CreateTransaction/CompleteTransaction';
import DonationAssociation from 'components/molecules/DonationModals/CreateTransaction/DonationAssociation';
import DonationInformation from 'components/molecules/DonationModals/CreateTransaction/DonationInfomation';
import MultiformTabs from 'components/molecules/MultiformTabs';
import { addOneTimeTransaction, getOneTimeTransaction } from 'features/donation/donationSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function CreateTransactionModal({ onCloseModal }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      contact: '',
      giftType: '',
      totalAmount: '',
      paymentMethod: '',
      date: '',
      pledge: '',
      campaign: '',
      impactArea: '',
      dedication: '',
      note: ''
    },
    onSubmit: (values) => {
      const body = {
        amount: values.totalAmount,
        currency: 'usd',
        is_from_different_currency: false,
        date_received: values.date,
        type: values.giftType,
        payment_method: values.paymentMethod,
        impact_area: null,
        dedication: values.dedication,
        notes: values.note,
        receipting_strategy: 'Log transaction without payment or receipt',
        pledge_id: values.pledge,
        campaign_id: values.campaign,
        contact_id: values.contact,
        is_revenue: false
      };
      dispatch(addOneTimeTransaction(body)).then(() => {
        dispatch(getOneTimeTransaction());
        toast('Transactuion Created Successfully');
        onCloseModal();
      });
    }
  });
  const tabs = [
    {
      name: 'DONATION INFORMATION',
      component: DonationInformation,
      props: { formik }
    },
    {
      name: 'ASSOCIATIONS ',
      component: DonationAssociation,
      props: { formik }
    },
    {
      name: 'COMPLETE TRANSACTION ',
      component: CompleteTransaction,
      props: { formik }
    }
  ];

  return (
    <Modal
      header="Create a Transaction - Donation"
      isShown
      hide={onCloseModal}
      showClose={onCloseModal}>
      <MultiformTabs tabs={tabs} disabled />
    </Modal>
  );
}

export default CreateTransactionModal;
