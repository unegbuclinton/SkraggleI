import Modal from 'components/layouts/Modal';
import React from 'react';
import PromoCodeModalComponent from '../PromocodeModalComponent';

function PromoCodeModal({ onClose }) {
  return (
    <Modal header="Promo Code" isShown hide={onClose} showClose={onClose}>
      <PromoCodeModalComponent onClose={onClose} />
    </Modal>
  );
}

export default PromoCodeModal;
