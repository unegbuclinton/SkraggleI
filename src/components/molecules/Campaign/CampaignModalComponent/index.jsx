import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import DropdownComponent from 'components/atoms/Dropdown';
import ErrorMessage from 'components/atoms/ErrorMessage';
import Input from 'components/atoms/Input/Input';
import { createNewCampaign, getAllCampaigns } from 'features/campaign/campaignSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import data from 'utilities/filterData';
import { createCampaignSchema } from 'validation/Schema';
import { ButtonsContainer, ModalInputDescription, ModalWrapper } from './styles';

const CampaignModalComponent = ({ onClose }) => {
  // const [selected, setSelected] = useState('Filters');
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      goals: ''
    },
    validationSchema: createCampaignSchema,
    onSubmit: (values) => {
      const body = {
        name: values.name,
        fundraising_goal: values.goals,
        description: values.description
      };
      dispatch(createNewCampaign(body)).then(() => {
        onClose();
        toast.success('new campaign created successfully');
        dispatch(getAllCampaigns());
      });
    }
  });
  return (
    <ModalWrapper onSubmit={formik.handleSubmit}>
      <Card>
        <h1>CAMPAIGN NAME</h1>
        <Input
          className="campaign-modal"
          type="text"
          placeholder="Lorem Ipsum"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        ) : null}

        <h1>DESCRIPTION</h1>
        <ModalInputDescription
          type="text"
          placeholder="Lorem Ipsum"
          id="description"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.description && formik.errors.description ? (
          <ErrorMessage>{formik.errors.description}</ErrorMessage>
        ) : null}

        <h1>CAMPAIGN FUNDRAISING GOALS</h1>
        <Input
          className="campaign-modal"
          type="text"
          placeholder="Lorem Ipsum"
          id="goals"
          name="goals"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.goals && formik.errors.goals ? (
          <ErrorMessage>{formik.errors.goals}</ErrorMessage>
        ) : null}

        <h1>FOLLOWERS</h1>
        <DropdownComponent
          data={data}
          className="dropdown-followers"
          type=""
          // selected={selected}
          // setSelected={setSelected}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
        />
        {/* {formik.touched.followers && formik.errors.followers ? (
          <ErrorMessage>{formik.errors.followers}</ErrorMessage>
        ) : null} */}
        <ButtonsContainer>
          <Button onClick={onClose} className="cancel-btn" auth invert>
            Cancel
          </Button>
          <Button type="submit" className="save-btn" auth>
            Save
          </Button>
        </ButtonsContainer>
      </Card>
    </ModalWrapper>
  );
};

export default CampaignModalComponent;
