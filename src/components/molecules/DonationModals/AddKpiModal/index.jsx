import Modal from 'components/layouts/Modal';
import React from 'react';
import AddKpiModalComponent from './AddKpiModalComponent';

function AddKpiModal({ onClose, isShown }) {
  return (
    <Modal header="API KPI" isShown={isShown} hide={onClose}>
      <AddKpiModalComponent onClose={onClose} />
    </Modal>
  );
}

export default AddKpiModal;
