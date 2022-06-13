import Button from 'components/atoms/Button/Button';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import RadioGroup from 'components/atoms/RadioGroup';
import { getAllPromoCode, updatePromoCode } from 'features/events/eventSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { promoCodeValidationSchema } from 'validation/Schema';
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

function EditPromoCodeComponent({ onClose }) {
  const { eachPromoCode } = useSelector((state) => state.events);
  console.log(eachPromoCode);
  const { code, description, discount, max_user, start_date, end_date, id } = eachPromoCode;
  const dispatch = useDispatch();
  const promoCodeId = id;
  const formik = useFormik({
    initialValues: {
      promoCode: code,
      description: description,
      discount: discount,
      maxUsers: max_user,
      startDate: start_date,
      endDate: end_date,
      promoCodeValues: []
    },
    validationSchema: promoCodeValidationSchema,
    onSubmit: (values) => {
      const body = {
        code: values.promoCode,
        description: values.description,
        discount: values.discount,
        max_user: values.maxUsers,
        start_date: values.startDate,
        end_date: values.endDate
      };
      dispatch(updatePromoCode({ body: body, id: promoCodeId })).then(() => {
        dispatch(getAllPromoCode());
        onClose();
      });
    }
  });

  const promocode = [
    { value: 'pk214', label: 'pk214' },
    { value: 'CmK123', label: 'CmK123' },
    { value: 'Uan2DE', label: 'CYN' }
  ];
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
        <SelectDropDown
          className="select-box"
          placeholder={'Select some Options'}
          isMulti="true"
          id="promoCodeValues"
          name="promoCodeValues"
          type={'text'}
          options={promocode}
          // value={formik.values.followers}
          onChange={(value) => {
            formik.setFieldValue(
              'promoCodeValues',
              value.map((curr) => curr.value)
            );
          }}
          onBlur={formik.handleBlur}
        />
      </SelectContainer>
      <ButtonContainer>
        <Button type="button" onClick={onClose} className="cancel-btn" auth invert>
          Cancel
        </Button>
        <Button className="save-btn">Save</Button>
      </ButtonContainer>
    </DropdownWrapper>
  );
}

export default EditPromoCodeComponent;
