import Modal from 'components/layouts/Modal';
import MultiformTabs from 'components/molecules/MultiformTabs';
import PledgeAssociateModalComponent from '../PledgeAssociationModalComponent';
import PledgeInfoModalComponent from '../PledgeInfrormationModalComponent';

function PledgeModal({ onClose }) {
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
    <Modal header="Pledge" isShown hide={onClose} showClose={onClose}>
      <MultiformTabs tabs={tabs} onClose={onClose} />
    </Modal>
  );
}
export default PledgeModal;
