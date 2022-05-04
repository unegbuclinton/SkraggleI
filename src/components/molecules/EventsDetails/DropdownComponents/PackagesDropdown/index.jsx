import React from "react";
import Input from "components/atoms/Input/Input";
import {
  ButtonContainer,
  DropDownWrapper,
  ErrorMsg,
  GenericText,
  InputWrapper,
  Label,
  RadioWrapper,
  SwitchLabel,
  SwitchWrapper,
} from "./styles";
import Switch from "components/atoms/Switch/Switch";
import Button from "components/atoms/Button/Button";
import { useFormik } from "formik";
import { packageValidatioSchema } from "validation/Schema";
import RadioGroup from "components/atoms/RadioGroup";

function PackageDropdown({
  setDropdown,
  setOpenDropdown,
  dropdown,
  openDropdown,
}) {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      directCost: "",
      discount: "",
      earlyBid: "",
      endTime: "",
      participant: "",
      qty: "",
      packageQuantity: "",
    },
    validationSchema: packageValidatioSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
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
      {formik.touched.name && formik.errors.name ? (
        <ErrorMsg>{formik.errors.name}</ErrorMsg>
      ) : null}
      <Label>Description</Label>
      <div className="text-editor"></div>
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
            placeholder="$  15.00"
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
            placeholder="$ 10.00"
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
              labelText: "Amount",
              value: 1,
            },
            {
              labelText: "Percentage",
              value: 2,
            },
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
            placeholder="10"
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
        <SwitchLabel>
          Adjust the per package price when punchasing multiple packages
        </SwitchLabel>
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
            placeholder="5"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.participant}
          />
          <div className="error-container">
            {formik.touched.participant && formik.errors.participant ? (
              <ErrorMsg>{formik.errors.participant}</ErrorMsg>
            ) : null}
          </div>
          <GenericText>
            How many participants are included in each package?
          </GenericText>
        </div>

        <div className="input-container">
          <Label>Number of packages</Label>
          <div className="unlimited-container">
            <p>Unlimited</p>
          </div>
          <GenericText>
            How many of this package are available for purchase?
          </GenericText>
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
            placeholder="5"
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
            placeholder="5"
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
          <Button
            type="button"
            onClick={() => setDropdown(false)}
            className="cancel-btn"
          >
            Cancel
          </Button>
        )}

        {openDropdown && (
          <Button
            type="button"
            onClick={() => setOpenDropdown(false)}
            className="cancel-btn"
          >
            Cancel
          </Button>
        )}

        <Button className="save-btn">Save</Button>
      </ButtonContainer>
    </DropDownWrapper>
  );
}

export default PackageDropdown;
