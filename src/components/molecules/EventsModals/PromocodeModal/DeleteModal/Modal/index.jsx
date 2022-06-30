import Modal from 'components/layouts/Modal';
import React from 'react';
import DeletePromoCode from '../DeletePromocode';

function DeletePromoCodeModal({ isShown, onClose, onClick }) {
  return (
    <Modal header="Delete PromoCode" isShown={isShown} hide={onClose}>
      <DeletePromoCode onClose={onClose} onClick={onClick} />
    </Modal>
  );
}

export default DeletePromoCodeModal;
