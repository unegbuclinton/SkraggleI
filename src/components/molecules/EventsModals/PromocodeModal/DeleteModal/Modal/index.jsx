import React from "react";
import Modal from "components/layouts/Modal";
import DeletePromoCode from "../DeletePromocode";

function DeletePromoCodeModal({ isShown, onClose }) {
  return (
    <Modal header="Delete PromoCode" isShown={isShown} hide={onClose}>
      <DeletePromoCode onClose={onClose} />
    </Modal>
  );
}

export default DeletePromoCodeModal;
