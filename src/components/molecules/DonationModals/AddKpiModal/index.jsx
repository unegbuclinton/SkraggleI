import Modal from 'components/layouts/Modal';
import React from 'react';
import AddKpiModalComponent from './AddKpiModalComponent';

function AddKpiModal() {
  return (
    <Modal header="API KPI" isShown>
      <AddKpiModalComponent />
    </Modal>
  );
}

export default AddKpiModal;
