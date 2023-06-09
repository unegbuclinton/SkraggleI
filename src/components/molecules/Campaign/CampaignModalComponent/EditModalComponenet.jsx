import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import ErrorMessage from 'components/atoms/ErrorMessage';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { editCampaign, getAllCampaigns, singleCampaign } from 'features/campaign/campaignSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createCampaignSchema } from 'validation/Schema';
import { ButtonsContainer, ModalInputDescription, ModalWrapper } from './styles';

const EditCampaignModalComponent = ({ onClose }) => {
  const dispatch = useDispatch();
  const { contactData, companies } = useSelector((state) => state.contact);
  const { isLoading, campaignByID } = useSelector((state) => state.campaign);

  const { name, fundraising_goal, description, id } = campaignByID;
  const conatct = contactData?.map((current) => ({
    value: current?.id,
    label: current?.first_name
  }));

  const company = companies?.map((current) => ({
    value: current?.id,
    label: current?.name
  }));

  const followers = [...conatct, ...company];

  const formik = useFormik({
    initialValues: {
      name: name || '',
      description: description || '',
      goals: fundraising_goal || '',
      followers: []
    },
    validationSchema: createCampaignSchema,
    onSubmit: (values) => {
      const body = {
        name: values.name,
        fundraising_goal: values.goals,
        description: values.description,
        followers: values.followers
      };
      dispatch(editCampaign({ body: body, id: id })).then(() => {
        onClose();
        toast.success('Campaign updated successfully');
        dispatch(getAllCampaigns());
        dispatch(singleCampaign(id));
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
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <ErrorMessage>{formik.errors.description}</ErrorMessage>
        ) : null}

        <h1>CAMPAIGN FUNDRAISING GOALS</h1>
        <Input
          className="campaign-modal"
          placeholder="Lorem Ipsum"
          onWheel={() => document.activeElement.blur()}
          id="goals"
          name="goals"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.goals}
        />
        {formik.touched.goals && formik.errors.goals ? (
          <ErrorMessage>{formik.errors.goals}</ErrorMessage>
        ) : null}

        <h1>FOLLOWERS</h1>
        <SelectDropDown
          className="dropdown-followers"
          placeholder={'Lorem Ipsum'}
          isMulti="true"
          id="followers"
          name="followers"
          type={'text'}
          options={followers}
          // value={formik.values.followers}
          onChange={(value) => {
            formik.setFieldValue(
              'followers',
              value.map((curr) => curr.value)
            );
          }}
          onBlur={formik.handleBlur}
        />
        {formik.touched.emailSubscription && formik.errors.emailSubscription ? (
          <ErrorMessage>{formik.errors.emailSubscription}</ErrorMessage>
        ) : null}
        <ButtonsContainer>
          <Button type="button" onClick={onClose} className="cancel-btn" auth invert>
            Cancel
          </Button>
          <Button type="submit" className="save-btn" auth loading={isLoading}>
            Save
          </Button>
        </ButtonsContainer>
      </Card>
    </ModalWrapper>
  );
};

export default EditCampaignModalComponent;
