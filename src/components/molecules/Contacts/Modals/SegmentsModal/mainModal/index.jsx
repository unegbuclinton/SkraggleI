import React from 'react';
import Modal from 'components/layouts/Modal';
import CreateNewSegment from '../CreateSegments';

function SegmentsModal({ onClose, isShown }) {
  return (
    <Modal header="Create New Segments" isShown={isShown} hide={onClose}>
      <CreateNewSegment onClose={onClose} />
    </Modal>
  );
}

export default SegmentsModal;
