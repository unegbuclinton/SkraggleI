import Modal from 'components/layouts/Modal';
import DonationButton from 'components/molecules/iFrameComp/DonationButton';
import React, { useState } from 'react';
import DonateButton from '../../ElementsModalsComponents/DonateButton';

function DonateModal({ onClose, isShown }) {
  const [labelColor, setLabelColor] = useState('#2f2f81');
  const [buttonColor, setButtonColor] = useState('#25cb3e');
  const [buttonSize, setButtonSize] = useState(25);

  const [labelName, setLabelName] = useState('Donate');

  return (
    <div>
      <Modal
        header="Donate Button"
        isShown={isShown}
        hide={onClose}
        sideModal
        iframeChildren={<DonationButton label={labelName} padding={buttonSize} />}>
        <DonateButton
          onclose={onClose}
          labelValue={labelColor}
          onChange={(e) => setLabelColor(e.target.value)}
          labelNameChange={(e) => setLabelName(e.target.value)}
          buttonColorChange={(e) => setButtonColor(e.target.value)}
          buttonColorValue={buttonColor}
          buttonSizeChange={(e) => setButtonSize(e.target.value)}
          buttonSizeValue={buttonSize}
        />
      </Modal>
    </div>
  );
}

export default DonateModal;
