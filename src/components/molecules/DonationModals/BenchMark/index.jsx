import Modal from 'components/layouts/Modal';
import React from 'react';

import BenchMark from './SmartBenchMark';

function BenchMarkModal({ isShown, onClose }) {
  return (
    <Modal header="BenchMark: Smart BenchMark" isShown={isShown} hide={onClose}>
      <BenchMark onClose={onClose} />
    </Modal>
  );
}

export default BenchMarkModal;
