import Modal from 'components/layouts/Modal';
import Unsubscribe from 'components/molecules/MailblastModalComponents/Unsubsccribe';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubscriptionUpdateModal from '../SubscriptionUpdateModal';

function UnsubscribeModal({ isShown, onCloseModal }) {
  const [getShow, setGetShow] = useState(false);
  const navigate = useNavigate();

  const Switch = () => {
    setInterval(() => {}, 2000);

    setGetShow(true);
    setTimeout(() => setGetShow(false), 2000);
    setTimeout(() => navigate('/mail-blasts'), 2000);
  };
  return (
    <>
      {!getShow ? (
        <Modal header="Unsubscribe from future Mail Blasts" isShown={isShown} hide={onCloseModal}>
          <Unsubscribe onCloseModal={Switch} />
        </Modal>
      ) : (
        <SubscriptionUpdateModal />
      )}
    </>
  );
}

export default UnsubscribeModal;
