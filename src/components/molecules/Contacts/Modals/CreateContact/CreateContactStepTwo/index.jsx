/* eslint-disable no-unused-vars */
import Button from 'components/atoms/Button/Button';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { useSelector } from 'react-redux';
import {
  AddressContainer,
  ButtonContainer,
  ErrorMsg,
  FormContainer,
  FormLabel,
  ModalContainer,
  ModalWrapper
} from './styles';

function ContactStepTwo({ onClose, formik }) {
  const { token } = useSelector((state) => state.auth);

  const { tagsData } = useSelector((state) => state.contact);
  const { houseHolds } = useSelector((state) => state.contact);

  const tagz = tagsData?.map((current) => ({ value: current?.id, label: current?.name }));
  const household = houseHolds?.map((current) => ({ value: current?.id, label: current?.name }));
  const { isLoading } = useSelector((state) => state.contact);

  const priorityOptions = [
    { value: 'High', label: 'High' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Low', label: 'Low' }
  ];

  const userData = token?.profile;

  const userName = `${userData?.first_name}  ${userData?.last_name}`;

  const assigneeOptions = [{ value: userData?.id, label: userName }];
  return (
    <ModalWrapper>
      <ModalContainer>
        <FormContainer onSubmit={formik.handleSubmit}>
          <FormLabel>ADDRESS</FormLabel>
          <Input
            className="form-input"
            id="address"
            type="text"
            name="address"
            placeholder="Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <ErrorMsg>{formik.errors.address}</ErrorMsg>
          ) : null}
          <Input
            className="form-input"
            type="text"
            placeholder="Unit"
            name="unit"
            id="unit"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.unit}
          />
          {formik.touched.unit && formik.errors.unit ? (
            <ErrorMsg>{formik.errors.unit}</ErrorMsg>
          ) : null}
          <AddressContainer>
            <div>
              <Input
                className="address-input"
                type="text"
                placeholder="City"
                name="city"
                id="city"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              />
              {formik.touched.city && formik.errors.city ? (
                <ErrorMsg>{formik.errors.city}</ErrorMsg>
              ) : null}
            </div>
            <div>
              <Input
                className="address-input"
                type="text"
                placeholder="State"
                name="state"
                id="state"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.state}
              />
              {formik.touched.state && formik.errors.state ? (
                <ErrorMsg>{formik.errors.state}</ErrorMsg>
              ) : null}
            </div>
          </AddressContainer>
          <AddressContainer>
            <div>
              <Input
                className="address-input"
                type="text"
                placeholder="Postal/zip"
                name="postalcode"
                id="postalcode"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.postalcode}
              />
              {formik.touched.postalcode && formik.errors.postalcode ? (
                <ErrorMsg>{formik.errors.postalcode}</ErrorMsg>
              ) : null}
            </div>
            <div>
              <Input
                className="address-input"
                type="text"
                placeholder="Country"
                name="country"
                id="country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
              />
              {formik.touched.country && formik.errors.country ? (
                <ErrorMsg>{formik.errors.country}</ErrorMsg>
              ) : null}
            </div>
          </AddressContainer>
          <FormLabel>HOUSEHOLD</FormLabel>
          <SelectDropDown
            className="dropdown"
            // isMulti="true"
            type={'text'}
            id="household"
            name="household"
            options={household}
            value={formik.values.household}
            onChange={(value) => {
              formik.setFieldValue('household', value.value);
            }}
            onBlur={formik.handleBlur}
          />
          {formik.touched.household && formik.errors.household ? (
            <ErrorMsg>{formik.errors.household}</ErrorMsg>
          ) : null}
          <FormLabel>ASSIGNEE</FormLabel>
          <SelectDropDown
            className="dropdown"
            type={'text'}
            placeholder={'Assignee'}
            id="assignee"
            name="assignee"
            options={assigneeOptions}
            value={formik.values.assignee}
            onChange={(value) => formik.setFieldValue('assignee', value.value)}
            onBlur={formik.handleBlur}
          />
          {formik.touched.assignee && formik.errors.assignee ? (
            <ErrorMsg>{formik.errors.assignee}</ErrorMsg>
          ) : null}
          <FormLabel>PRIORITY</FormLabel>
          <SelectDropDown
            className="dropdown"
            type={'text'}
            id="priority"
            name="priority"
            options={priorityOptions}
            value={formik.values.priority}
            onChange={(value) => formik.setFieldValue('priority', value.value)}
            onBlur={formik.handleBlur}
          />
          {formik.touched.priority && formik.errors.priority ? (
            <ErrorMsg>{formik.errors.priority}</ErrorMsg>
          ) : null}
          <FormLabel>TAGS</FormLabel>
          <SelectDropDown
            className="dropdown"
            isMulti="true"
            type={'text'}
            id="tags"
            name="tags"
            options={tagz}
            // value={formik.values.tags}
            onChange={(value) => {
              formik.setFieldValue(
                'tags',
                value.map((curr) => curr.value)
              );
            }}
            onBlur={formik.handleBlur}
          />
          {formik.touched.tags && formik.errors.tags ? (
            <ErrorMsg>{formik.errors.tags}</ErrorMsg>
          ) : null}
          <ButtonContainer>
            <Button className="cancel" type="button" proute onClick={onClose} auth invert>
              Cancel
            </Button>
            <Button type="submit" className="continue" disabled={isLoading}>
              Save
            </Button>
          </ButtonContainer>
        </FormContainer>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default ContactStepTwo;
