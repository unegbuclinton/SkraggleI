import Modal from 'components/layouts/Modal';
import MultiformTabs from 'components/molecules/MultiformTabs';
import { addPledge, getPledge } from 'features/donation/donationSlice';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PledgeAssociateModalComponent from '../PledgeAssociationModalComponent';
import PledgeInfoModalComponent from '../PledgeInfrormationModalComponent';

function PledgeModal({ onClose, isShown }) {
  const dispatch = useDispatch();
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
      const body = {
        contact_id: values.contact_id,
        campaign_id: values.campaign_id,
        name: values.pledge_name,
        amount: values.value_donation,
        start_date: values.start_date,
        end_date: values.end_date,
        type: values.pledge_type,
        payment_interval: values.interval,
        // impact_area: null,
        // keywords: "",
        // source: ,
        dedication: values.dedication,
        notes: values.notes,
        amount_currency: values.amount_currency
      };
      dispatch(addPledge(body)).then(() => {
        onClose();
        dispatch(getPledge());
        toast.success('Pledge added successfully');
      });
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
