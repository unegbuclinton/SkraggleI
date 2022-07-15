import Modal from 'components/layouts/Modal';
import SimpleFormModalComponent from 'components/molecules/ElementsModalsComponents/SimpleFormModalComponent';
import SimpleFormIframeComponent from 'components/molecules/iFrameComp/simpleForm';
// import SimpleFormIframeComponent from 'components/molecules/iFrameComp/SimpleForm';
import React from 'react';

function SimpleFormModal({ isShown, onClose }) {
  // const [formSize, setFormSize] = useState();
  // const [textColor, setTextColor] = useState('#000000');
  // const [backgroundColor, setBackgroundColor] = useState('#FFFFF');
  // const [borderSize, setBorderSize] = useState();
  // const [borderRadius, setBorderRadius] = useState();
  // const [borderColor, setBorderColor] = useState('#000000');
  // const [amountLabel, setAmountLabel] = useState('$60');
  // const [showAmountShadow, setShowAmountShadow] = useState(false);
  // const [buttonLabel, setButtonLabel] = useState('Donate');
  // const [labelColor, setLabelColor] = useState('#000000');
  // const [buttonColor, setButtonColor] = useState('#2797FF');
  // const [buttonBorder, setButtonBorder] = useState('#000000');
  // const [buttonRadius, setButtonRadius] = useState();
  // const [buttonBorderColor, setButtonBorderColor] = useState('#000000');
  // const [showButtonShadow, setShowButtonShadow] = useState(false);

  return (
    <Modal
      header="Simple Form"
      isShown={isShown}
      hide={onClose}
      sideModal
      iframeChildren={<SimpleFormIframeComponent />}>
      <SimpleFormModalComponent onClose={onClose} />
    </Modal>
  );
}

export default SimpleFormModal;
