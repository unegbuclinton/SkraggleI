import Modal from 'components/layouts/Modal';
import DonationButton from 'components/molecules/iFrameComp/DonationButton';
import DonateButton from '../../ElementsModalsComponents/DonateButton';

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
