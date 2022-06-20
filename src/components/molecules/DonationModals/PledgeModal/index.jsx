import Modal from 'components/layouts/Modal';
import MultiformTabs from 'components/molecules/MultiformTabs';
import PledgeAssociateModalComponent from '../PledgeAssociationModalComponent';
import PledgeInfoModalComponent from '../PledgeInfrormationModalComponent';

function PledgeModal({ onClose, isShown }) {
  const tabs = [
    {
      name: 'PLEDGE INFORMATION',
      component: PledgeInfoModalComponent
    },
    {
      name: 'ASSOCIATIONS ',
      component: PledgeAssociateModalComponent
    }
  ];
  return (
    <Modal header="Pledge" isShown={isShown} hide={onClose} showClose={onClose}>
      <MultiformTabs tabs={tabs} onClose={onClose} />
    </Modal>
  );
}
export default PledgeModal;
