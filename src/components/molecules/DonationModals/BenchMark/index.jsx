import Modal from 'components/layouts/Modal';
import React from 'react';
import BenchMark from './SmartBenchMark';

function BenchMarkModal() {
  return (
    <Modal header="BenchMark: Smart BenchMark" isShown>
      <BenchMark />
    </Modal>
  );
}

export default BenchMarkModal;
