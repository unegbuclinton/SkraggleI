import Modal from 'components/layouts/Modal';
import ImpactSliderModalComponent from 'components/molecules/ElementsModalsComponents/ImpactSliderModalComponent';
import React from 'react';

function ImpactSliderModal() {
  return (
    <Modal header="Impact Slider" isShown>
      <ImpactSliderModalComponent />
    </Modal>
  );
}

export default ImpactSliderModal;
