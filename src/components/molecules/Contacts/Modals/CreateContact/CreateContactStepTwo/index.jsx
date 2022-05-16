import Button from 'components/atoms/Button/Button';
import CustomDropdown from 'components/atoms/CustomDropdown/CustomDropdown';
import Input from 'components/atoms/Input/Input';
import { subcription } from 'utilities/modalData';
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
          <CustomDropdown className="dropdown" data={subcription} />
          <FormLabel>ASSIGNEE</FormLabel>
          <CustomDropdown className="dropdown" data={subcription} />
          <FormLabel>PRIORITY</FormLabel>
          <CustomDropdown className="dropdown" data={subcription} />
          <FormLabel>TAGS</FormLabel>
          <CustomDropdown className="dropdown" data={subcription} />
          <ButtonContainer>
            <Button className="cancel" type="button" proute onClose={onClose} auth invert>
              Cancel
            </Button>
            <Button type="submit" className="continue">
              Save
            </Button>
          </ButtonContainer>
        </FormContainer>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default ContactStepTwo;
