import Modal from 'components/layouts/Modal';
import React from 'react';
import EditPromoCodeComponent from '../PromocodeModalComponent/EditPromoCode/EditPromoCodeComponent';

function EditPromoCodeModal({ onCloseModal, isShown }) {
  return (
    <Modal header="Promo Code" isShown={isShown} hide={onCloseModal} showClose={onCloseModal}>
      <EditPromoCodeComponent onCloseModal={onCloseModal} />
    </Modal>
  );
}

export default EditPromoCodeModal;
