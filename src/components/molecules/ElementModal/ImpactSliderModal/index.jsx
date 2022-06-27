import Modal from 'components/layouts/Modal';
import ImpactSliderModalComponent from 'components/molecules/ElementsModalsComponents/ImpactSliderModalComponent';
import React from 'react';

function ImpactSliderModal({ isShown, onClose }) {
  return (
    <Modal header="Impact Slider" isShown={isShown} hide={onClose}>
      <ImpactSliderModalComponent />
    </Modal>
  );
}

export default ImpactSliderModal;
