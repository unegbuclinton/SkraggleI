import Modal from 'components/layouts/Modal';
import MultiformTabs from 'components/molecules/MultiformTabs';
import { useFormik } from 'formik';
import PledgeAssociateModalComponent from '../PledgeAssociationModalComponent';
import PledgeInfoModalComponent from '../PledgeInfrormationModalComponent';

function PledgeModal({ onClose, isShown }) {
  const formik = useFormik({
    initialValues: {
      contact_id: '',
      pledge_name: '',
      value_donation: '',
      pledge_type: '',
      start_date: '',
      end_date: '',
      attachment: [],
      expected_date: [],
      amount: '',
      interval: '',
      campaign_id: '',
      impact_area: '',
      source: '',
      keywords: [],
      dedication: '',
      notes: '',
      amount_currency: ''
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });
  const tabs = [
    {
      name: 'PLEDGE INFORMATION',
      component: PledgeInfoModalComponent,
      props: { formik }
    },
    {
      name: 'ASSOCIATIONS ',
      component: PledgeAssociateModalComponent,
      props: { formik }
    }
  ];
  return (
    <Modal header="Pledge" isShown={isShown} hide={onClose} showClose={onClose}>
      <MultiformTabs tabs={tabs} onClose={onClose} />
    </Modal>
  );
}
export default PledgeModal;
