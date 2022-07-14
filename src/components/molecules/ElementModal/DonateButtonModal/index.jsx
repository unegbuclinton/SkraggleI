import Modal from 'components/layouts/Modal';
import DonateButton from 'components/molecules/ElementsModalsComponents/DonateButton';
import DonationButton from 'components/molecules/iFrameComp/DonationButton';

function DonateModal({ onClose, isShown }) {
  return (
    <div>
      <Modal
        header="Donate Button"
        isShown={isShown}
        hide={onClose}
        sideModal
        iframeChildren={<DonationButton />}>
        <DonateButton onclose={onClose} />
      </Modal>
    </div>
  );
}

export default DonateModal;
