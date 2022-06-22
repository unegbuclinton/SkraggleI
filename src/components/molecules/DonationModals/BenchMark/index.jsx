import Modal from 'components/layouts/Modal';
import React from 'react';
// import AddKpiModal from '../AddKpiModal';
import BenchMark from './SmartBenchMark';

function BenchMarkModal() {
  return (
    <Modal header="BenchMark: Smart BenchMark" isShown>
      <BenchMark />
      {/* <AddKpiModal /> */}
    </Modal>
  );
}

export default BenchMarkModal;
