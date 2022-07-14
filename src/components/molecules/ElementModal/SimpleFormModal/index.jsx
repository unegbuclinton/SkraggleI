import Modal from 'components/layouts/Modal';
import SimpleFormModalComponent from 'components/molecules/ElementsModalsComponents/SimpleFormModalComponent';
import SimpleFormIframe from 'components/molecules/iFrameComp/SimpleForm';
import React, { useState } from 'react';

function SimpleFormModal({ isShown, onClose }) {
  const [formSize, setFormSize] = useState();
  const [textColor, setTextColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFF');
  const [borderSize, setBorderSize] = useState();
  const [borderRadius, setBorderRadius] = useState();
  const [borderColor, setBorderColor] = useState('#000000');
  const [amountLabel, setAmountLabel] = useState('$60');
  const [showAmountShadow, setShowAmountShadow] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('Donate');
  const [labelColor, setLabelColor] = useState('#000000');
  const [buttonColor, setButtonColor] = useState('#2797FF');
  const [buttonBorder, setButtonBorder] = useState('#000000');
  const [buttonRadius, setButtonRadius] = useState();
  const [buttonBorderColor, setButtonBorderColor] = useState('#000000');
  const [showButtonShadow, setShowButtonShadow] = useState(false);

  return (
    <Modal
      header="Simple Form"
      isShown={isShown}
      hide={onClose}
      sideModal
      iframeChildren={
        <SimpleFormIframe
          formsize={formSize}
          textColor={textColor}
          backgroundColor={backgroundColor}
          borderSize={borderSize}
          borderRadius={borderRadius}
          borderColor={borderColor}
          amountLabel={amountLabel}
          showAmountShadow={showAmountShadow}
          buttonLabel={buttonLabel}
          labelColor={labelColor}
          buttonColor={buttonColor}
          buttonBorder={buttonBorder}
          buttonRadius={buttonRadius}
          buttonBorderColor={buttonBorderColor}
          showButtonShadow={showButtonShadow}
        />
      }>
      <SimpleFormModalComponent
        onClose={onClose}
        formSize={formSize}
        formSizeChange={(e) => setFormSize(e.target.value)}
        textColorChange={(e) => setTextColor(e.target.value)}
        textColor={textColor}
        backgroundColorChange={(e) => setBackgroundColor(e.target.value)}
        backgroundColor={backgroundColor}
        borderSizeChange={(e) => setBorderSize(e.target.value)}
        borderSize={borderSize}
        borderRadiusChange={(e) => setBorderRadius(e.target.value)}
        borderRadius={borderRadius}
        borderColorChange={(e) => setBorderColor(e.target.value)}
        borderColor={borderColor}
        amountLabelChange={(e) => setAmountLabel(e.target.value)}
        showAmountShadowChange={(e) => setShowAmountShadow(e.target.value)}
        buttonLabelChange={(e) => setButtonLabel(e.target.value)}
        labelColorChange={(e) => setLabelColor(e.target.value)}
        labelColor={labelColor}
        buttonColorChange={(e) => setButtonColor(e.target.value)}
        buttonColor={buttonColor}
        buttonBorderChange={(e) => setButtonBorder(e.target.value)}
        buttonBorder={buttonBorder}
        buttonRadiusChange={(e) => setButtonRadius(e.target.value)}
        buttonRadius={buttonRadius}
        buttonBorderColorChange={(e) => setButtonBorderColor(e.target.value)}
        buttonBorderColor={buttonBorderColor}
        showButtonShadowChange={(e) => setShowButtonShadow(e.target.value)}
      />
    </Modal>
  );
}

export default SimpleFormModal;
