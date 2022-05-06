import React from 'react';
import Input from 'components/atoms/Input/Input';
import {
  ButtonContainer,
  Container,
  DropdownWrapper,
  ErrorMsg,
  InputWrapper,
  Label,
  RadioWrapper,
  SelectContainer
} from './styles';
import Button from 'components/atoms/Button/Button';
import { promoCodeValidationSchema } from 'validation/Schema';
import { useFormik } from 'formik';
import RadioGroup from 'components/atoms/RadioGroup';

function PromoCodeDropdown({ setDropdown }) {
  const formik = useFormik({
    initialValues: {
      promoCode: '',
      description: '',
      discount: '',
      maxUsers: '',
      startDate: '',
      endDate: ''
    },
    validationSchema: promoCodeValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <DropdownWrapper onSubmit={formik.handleSubmit}>
      <InputWrapper>
        <div>
          <Label>Promo code</Label>
          <Input
            className="normal-input"
            type="text"
            id="promoCode"
            name="promoCode"
            placeholder="Save15"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.promoCode}
          />
          {formik.touched.promoCode && formik.errors.promoCode ? (
            <ErrorMsg>{formik.errors.promoCode}</ErrorMsg>
          ) : null}

          <Label>Note: Max 30 charaters. Must only letters and numbers.</Label>
        </div>
        <div>
          <Label>Description</Label>
          <Input
            className="normal-input"
            id="description"
            name="description"
            type="text"
            placeholder="test"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <ErrorMsg>{formik.errors.description}</ErrorMsg>
          ) : null}
        </div>
      </InputWrapper>
      <RadioWrapper>
        {/* <Radio value="any" name="radio-test" labelText="Amount" />
        <Radio value="all" name="radio-test" labelText="Percentage" /> */}
        <RadioGroup
          radioData={[
            {
              labelText: 'Amount',
              value: 1
            },
            {
              labelText: 'Percentage',
              value: 2
            }
          ]}
        />
      </RadioWrapper>
      <Container className="container">
        <div>
          <Label>Discount</Label>
          <Input
            className="discount-input"
            type="number"
            placeholder="15"
            name="discount"
            id="discount"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.discount}
          />
          {formik.touched.discount && formik.errors.discount ? (
            <ErrorMsg>{formik.errors.discount}</ErrorMsg>
          ) : null}
        </div>
        <div>
          <Label>Maximum users</Label>
          <Input
            className="maxuser-date-input"
            type="number"
            id="maxUsers"
            name="maxUsers"
            placeholder="1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.maxUsers}
          />
          {formik.touched.maxUsers && formik.errors.maxUsers ? (
            <ErrorMsg>{formik.errors.maxUsers}</ErrorMsg>
          ) : null}

          <p className="max-label">How many of this promo code can be used per event?</p>
        </div>
      </Container>
      <Container>
        <div>
          <Label>Start date</Label>
          <Input
            className="maxuser-date-input"
            id="startDate"
            name="startDate"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.startDate}
          />
          {formik.touched.startDate && formik.errors.startDate ? (
            <ErrorMsg>{formik.errors.startDate}</ErrorMsg>
          ) : null}
        </div>
        <div>
          <Label>End date</Label>
          <Input
            className="maxuser-date-input"
            id="endDate"
            name="endDate"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endDate}
          />
          {formik.touched.endDate && formik.errors.endDate ? (
            <ErrorMsg>{formik.errors.endDate}</ErrorMsg>
          ) : null}
        </div>
      </Container>
      <SelectContainer>
        <h2>This promo code will be applied to all packages or Select all</h2>
        <Input className="select-box" placeholder="Select some Options " />
      </SelectContainer>
      <ButtonContainer>
        <Button type="button" onClick={() => setDropdown(false)} className="cancel-btn">
          Cancel
        </Button>
        <Button className="save-btn">Save</Button>
      </ButtonContainer>
    </DropdownWrapper>
  );
}

export default PromoCodeDropdown;
