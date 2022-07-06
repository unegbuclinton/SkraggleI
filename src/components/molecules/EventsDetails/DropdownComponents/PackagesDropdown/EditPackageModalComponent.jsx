import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import RadioGroup from 'components/atoms/RadioGroup';
import Switch from 'components/atoms/Switch/Switch';
import { getAllPackages, packageUpdate } from 'features/events/eventSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  ButtonContainer,
  DropDownWrapper,
  ErrorMsg,
  GenericText,
  InputWrapper,
  Label,
  RadioWrapper,
  SwitchLabel,
  SwitchWrapper
} from './styles';

function EditPackageModalComponent({ setDropdown, setOpenDropdown, dropdown, onClose }) {
  const { isLoading, packageInfoData } = useSelector((state) => state.events);

  const id = packageInfoData?.id;
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: packageInfoData?.name,
      price: '',
      description: '',
      directCost: '',
      discount: '',
      earlyBid: '',
      endTime: '',
      participant: '',
      qty: '',
      packageQuantity: ''
    },
    onSubmit: (values) => {
      const body = {
        name: values.name,
        description: values.description,
        price: values.price,
        direct_cost: values.directCost,
        number_of_packages_for_sale: 10,
        qty_purchase_limit: values.packageQuantity,
        early_bird_discount_enabled: true,
        early_bird_discount_amount: values.discount,
        early_bird_discount_cutoff_time: values.earlyBid,
        early_bird_discount_type: 'percentage',
        participants: values.participant,
        pre_select_qty: values.qty,
        custom_event_field: ['samson@gmail.com']
      };

      dispatch(packageUpdate({ body, id })).then(() => {
        dispatch(getAllPackages());
        toast.success('Package Edited successfully');
        onClose();
      });
    }
  });

  return (
    <DropDownWrapper onSubmit={formik.handleSubmit}>
      <Label>Name</Label>
      <Input
        type="text"
        id="name"
        name="name"
        className="name-input"
        placeholder="Gift pack"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? <ErrorMsg>{formik.errors.name}</ErrorMsg> : null}
      <Label>Description</Label>
      <textarea
        id="description"
        name="description"
        className="description-input"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
      />

      <SwitchWrapper className="maplink-container">
        <SwitchLabel>Enable map link</SwitchLabel>
        <Switch />
      </SwitchWrapper>
      <InputWrapper>
        <div>
          <Label>Price</Label>
          <Input
            className="money-input"
            id="price"
            name="price"
            type="text"
            placeholder="$"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          <div className="price-error">
            {formik.touched.price && formik.errors.price ? (
              <ErrorMsg>{formik.errors.price}</ErrorMsg>
            ) : null}
          </div>
        </div>
        <div>
          <Label>Direct cost</Label>
          <Input
            className="money-input"
            id="directCost"
            name="directCost"
            type="text"
            placeholder="$ "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.directCost}
          />
          <div className="price-error">
            {formik.touched.directCost && formik.errors.directCost ? (
              <ErrorMsg>{formik.errors.directCost}</ErrorMsg>
            ) : null}
          </div>
        </div>
      </InputWrapper>
      <SwitchWrapper>
        <SwitchLabel>Include an early bird discount</SwitchLabel>
        <Switch />
      </SwitchWrapper>
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
      <InputWrapper>
        <div>
          <Label>Discount percentage</Label>
          <Input
            className="discount-input"
            id="discount"
            name="discount"
            type="number"
            placeholder="%"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.discount}
          />
          <div className="error-container">
            {formik.touched.discount && formik.errors.discount ? (
              <ErrorMsg>{formik.errors.discount}</ErrorMsg>
            ) : null}
          </div>
        </div>

        <div>
          <Label>Early bird cutoff</Label>
          <Input
            className="date-time-input"
            id="earlyBid"
            name="earlyBid"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.earlyBid}
          />
          <div className="error-container">
            {formik.touched.earlyBid && formik.errors.earlyBid ? (
              <ErrorMsg>{formik.errors.earlyBid}</ErrorMsg>
            ) : null}
          </div>
        </div>

        <div>
          <Label>End time</Label>
          <Input
            className="date-time-input"
            name="endTime"
            id="endTime"
            type="time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endTime}
          />
          <div className="error-container">
            {formik.touched.endTime && formik.errors.endTime ? (
              <ErrorMsg>{formik.errors.endTime}</ErrorMsg>
            ) : null}
          </div>
        </div>
      </InputWrapper>
      <SwitchWrapper className="multiple-package-wrapper">
        <SwitchLabel>Adjust the per package price when purchasing multiple packages</SwitchLabel>
        <Switch />
      </SwitchWrapper>
      <InputWrapper>
        <div className="input-container">
          <Label>Participants included</Label>
          <Input
            className="normal-input"
            name="participant"
            id="participant"
            type="number"
            placeholder=""
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.participant}
          />
          <div className="error-container">
            {formik.touched.participant && formik.errors.participant ? (
              <ErrorMsg>{formik.errors.participant}</ErrorMsg>
            ) : null}
          </div>
          <GenericText>How many participants are included in each package?</GenericText>
        </div>

        <div className="input-container">
          <Label>Number of packages</Label>
          <div className="unlimited-container">
            <p>Unlimited</p>
          </div>
          <GenericText>How many of this package are available for purchase?</GenericText>
        </div>
      </InputWrapper>
      <InputWrapper>
        <div className="qty-container">
          <Label>Qty</Label>
          <Input
            className="normal-input"
            name="qty"
            id="qty"
            type="number"
            placeholder="Qty"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.qty}
          />

          <div className="error-container">
            {formik.touched.qty && formik.errors.qty ? (
              <ErrorMsg>{formik.errors.qty}</ErrorMsg>
            ) : null}
          </div>
          <GenericText>Per purchase. Cannot be greater than 100</GenericText>
        </div>

        <div className="qty-container">
          <Label>Pre-Selected package Qty</Label>
          <Input
            className="date-time-input"
            id="packageQuantity"
            name="packageQuantity"
            type="text"
            placeholder=""
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.packageQuantity}
          />
          <div className="error-container">
            {formik.touched.packageQuantity && formik.errors.packageQuantity ? (
              <ErrorMsg>{formik.errors.packageQuantity}</ErrorMsg>
            ) : null}
          </div>
          <GenericText>Cannot be greater than 100</GenericText>
        </div>
      </InputWrapper>
      <InputWrapper>
        <div className="custom-container">
          <Label className="custom-label">Custom event fields</Label>
          <div className="email-container"></div>
        </div>
      </InputWrapper>
      <ButtonContainer>
        {dropdown === true && (
          <Button type="button" onClick={() => setDropdown(false)} className="cancel-btn">
            Cancel
          </Button>
        )}
        <Button
          type="button"
          onClick={(() => setOpenDropdown(false), onClose)}
          className="cancel-btn"
          invert>
          Cancel
        </Button>
        <Button className="save-btn" disabled={isLoading}>
          Save
        </Button>
      </ButtonContainer>
    </DropDownWrapper>
  );
}

export default EditPackageModalComponent;
