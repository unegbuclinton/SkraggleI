import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import ErrorMessage from 'components/atoms/ErrorMessage';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { React } from 'react';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import { ButtonsContainer, ModalInputDescription, ModalWrapper } from './styles';

const PledgeAssociateModalComponent = ({ DecrementTab, formik }) => {
  const { campaigns } = useSelector((state) => state.campaign);
  const campaignOptions = campaigns?.map((current) => ({
    value: current?.id,
    label: current?.name
  }));

  return (
    <ModalWrapper onSubmit={formik.handleSubmit}>
      <Card>
        <h1>Campaign</h1>
        <SelectDropDown
          type={'text'}
          options={campaignOptions}
          value={formik.values.campaign_id}
          onChange={(value) => formik.setFieldValue('campaign_id', value.value)}
          onBlur={formik.handleBlur}
        />
        {formik.touched.campaign_id && formik.errors.campaign_id ? (
          <ErrorMessage>{formik.errors.campaign_id}</ErrorMessage>
        ) : null}

        <h1>Impact Area</h1>
        <Input
          className="pledge-modal"
          type="text"
          id="impact_area"
          name="impact_area"
          placeholder="Start typing to search"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.impact_area}
        />
        {formik.touched.impact_area && formik.errors.impact_area ? (
          <ErrorMessage>{formik.errors.impact_area}</ErrorMessage>
        ) : null}

        <h1>Dedication</h1>
        <Input
          className="pledge-modal"
          type="text"
          id="dedication"
          name="dedication"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.dedication}
        />
        {formik.touched.dedication && formik.errors.dedication ? (
          <ErrorMessage>{formik.errors.dedication}</ErrorMessage>
        ) : null}

        <h1>Notes</h1>
        <ModalInputDescription
          type="text"
          id="notes"
          name="notes"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.notes}
        />
        {formik.touched.notes && formik.errors.notes ? (
          <ErrorMessage>{formik.errors.notes}</ErrorMessage>
        ) : null}

        <ButtonsContainer>
          <Button onClick={DecrementTab} className="back-btn" auth invert type="button">
            Back
          </Button>
          <Button type="submit" className="save-btn" auth>
            Save
          </Button>
        </ButtonsContainer>
      </Card>
    </ModalWrapper>
  );
};

export default PledgeAssociateModalComponent;
