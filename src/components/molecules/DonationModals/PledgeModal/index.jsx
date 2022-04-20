import Modal from "components/layouts/Modal";
import PledgeInfoModalComponent from "../PledgeInfrormationModalComponent";
import PledgeAssociateModalComponent from "../PledgeAssociationModalComponent";
import MultiformTabs from "components/molecules/MultiformTabs";

function PledgeModal({ onClose}) {
  const tabs = [
    {
      name: "PLEDGE INFORMATION",
      component: PledgeInfoModalComponent
    },
    {
      name: "ASSOCIATIONS ",
      component: PledgeAssociateModalComponent
    },
  ];
  return (
    <Modal header="Pledge" isShown hide={onClose}>
      <MultiformTabs tabs={tabs}/>
    </Modal>
  );
}
export default PledgeModal;