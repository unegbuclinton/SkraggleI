import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import Switch from 'components/atoms/Switch/Switch';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function FieldModalComponent({ onClose }) {
  return (
    <FieldModalWrapper>
      <Card className="field-modal__card">
        <FieldModalContainer>
          <FieldModalLabel>Field Label</FieldModalLabel>
          <Input className="field-input" placeholder="Trial label" />
        </FieldModalContainer>
        <FieldModalContainer>
          <FieldModalLabel>Reporting Label</FieldModalLabel>
          <Input className="field-input" placeholder="Display label " />
        </FieldModalContainer>
        <FieldModalContainer>
          <FieldModalLabel>Field Type</FieldModalLabel>
          <div className="select-container">
            <SelectDropDown className="field-select" />
            <Checkbox label="Required" styledClass="field-checkbox" pink />
          </div>
        </FieldModalContainer>
        <FieldModalContainer>
          <FieldModalLabel>Maximum Characters</FieldModalLabel>
          <Input className="field-input__disabled" placeholder="Unlimited" />
        </FieldModalContainer>
        <FieldModalHeaderContainer>
          <FieldModalHeader>Show this field on a separate line</FieldModalHeader>
          <Switch className="field-switch__top" />
        </FieldModalHeaderContainer>
        <FieldModalHeaderContainer>
          <FieldModalHeader>Event Wide Field</FieldModalHeader>
          <Switch className="field-switch__bottom" />
        </FieldModalHeaderContainer>
        <FieldModalHeaderContainer>
          <FieldModalHeader>Associate Field With Specific Package(s)</FieldModalHeader>
        </FieldModalHeaderContainer>
        <SelectDropDown isMulti={true} className="field-muti__select" />
        <FieldModalFooter>
          <Button className="field-cancel__btn" auth invert onClick={onClose}>
            Cancel
          </Button>
          <Button className="field-save__btn" auth>
            Save
          </Button>
        </FieldModalFooter>
      </Card>
    </FieldModalWrapper>
  );
}

export default FieldModalComponent;

const FieldModalWrapper = styled.div`
  .field-muti__select {
    width: 100%;
  }
  .field-modal__card {
    padding: 3.2rem 5.4rem 6rem 3.2rem;

    .field-input {
      background-color: ${COLORS.white};
      border: 1px solid ${COLORS['gray-500']};
      margin-bottom: 3.2rem;
    }
  }
  .field-input__disabled {
    max-width: 28.3rem;
    background-color: ${COLORS.torquoise};
    padding-left: 2.83rem;
  }
  .select-container {
    display: flex;
    gap: 2.1rem;
    margin-bottom: 3.2rem;

    .field-checkbox {
      width: 1.8rem;
      height: 1.8rem;
    }
    .field-select {
      max-width: 28.3rem;
    }
  }
`;
const FieldModalContainer = styled.div`
  .field-modal__card {
    padding: 3.2rem 5.4rem 6rem 3.2rem;

    .field-input {
      background-color: ${COLORS.white};
      border: 1px solid ${COLORS['grey-500']};
    }
  }
`;
const FieldModalLabel = styled.p`
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-200']};
  margin-bottom: 0.8rem;
`;

const FieldModalHeader = styled.h1`
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.normal};
`;
const FieldModalHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3.2rem;

  .field-switch__top {
    margin-left: 3.2rem;
  }
  .field-switch__bottom {
    margin-left: 16.4rem;
  }
`;
const FieldModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
  margin-top: 4rem;

  .field-cancel__btn {
    width: 10.7rem;
    height: 5.1rem;
    color: ${COLORS['gray-500']};
  }
  .field-save__btn {
    width: 20.5rem;
    height: 5.1rem;
  }
`;
