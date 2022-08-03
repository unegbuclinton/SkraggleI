import { useState } from 'react';
import P2PFundraiserLiveModal from '../P2FundraiserLiveModal';
import P2PFundraiserModal from '../P2PFundraiserModal';

function P2PModalComponent() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { campaigns } = useSelector((state) => state.campaign);

  // const campaign = campaigns?.map((current) => ({ value: current?.id, label: current?.name }));

  // const { isLoading } = useSelector((state) => state.p2p);
  // const formik = useFormik({
  //   initialValues: {
  //     campaignName: '',
  //     designation: '',
  //     fundraiserName: '',
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     goalAmount: '',
  //     goalCurrency: '',
  //     offlineAmount: '',
  //     offlineDonation: '',
  //     goalDate: '',
  //     personalMessage: ''
  //   },
  //   validationSchema: P2PValidationSchema,
  //   onSubmit: (values) => {
  //     const body = {
  //       campaign_id: values.campaignName,
  //       designation: values.designation,
  //       fundraiser_display_name: values.fundraiserName,
  //       first_name: values.firstName,
  //       last_name: values.lastName,
  //       email: values.email,
  //       goal: values.goalAmount,
  //       goal_currency: values.goalCurrency,
  //       offline_amount: values.offlineAmount,
  //       offline_donation: values.offlineDonation,
  //       goal_date: values.goalDate,
  //       personal_message: values.personalMessage
  //     };

  //     dispatch(createP2P(body)).then(() => {
  //       toast.success('P2P Created Successfully');
  //       onClose();
  //       dispatch(viewP2P());
  //     });
  //     navigate('/peer-to-peer');
  //   }
  // });

  // const emailSub = [
  //   { value: 'Yes', label: 'Yes' },
  //   { value: 'No', label: 'No' }
  // ];

  // const currency = [
  //   { value: 'USD', label: 'USD' },
  //   { value: 'PKR', label: 'PKR' },
  //   { value: 'CYN', label: 'CYN' }
  // ];

  const [showFirstModal, setShowFirstModal] = useState(true);
  // const textArea = useState(null);

  // const copyToClipboard = useCallback(() => {
  //   const text = textArea.current.value;
  //   navigator.clipboard.writeText(text);
  //   alert('Text Copied');
  // }, []);

  return showFirstModal ? (
    <P2PFundraiserModal onClose={setShowFirstModal(true)} />
  ) : (
    <P2PFundraiserLiveModal />
  );
}

export default P2PModalComponent;
