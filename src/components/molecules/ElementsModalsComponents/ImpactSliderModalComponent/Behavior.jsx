import Button from 'components/atoms/Button/Button';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconDateArrow, DPIconDrag } from 'icons';
import React, { useState } from 'react';
import styled from 'styled-components';

function Behavior() {
  const [installment, setInstallment] = useState(['']);
  const [amount, setAmount] = useState('');

  const handleChange = (e, index) => {
    const list = [...installment];
    list[index] = e.target.value;
    setInstallment(list);
    // formik.setFieldValue('expected_date', [...formik.values.expected_date, list]);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setInstallment([
      ...installment,
      {
        id: installment.length,
        name: amount
      }
    ]);
    setAmount('');
  };
  return (
    <BehaviourWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel>Open campaign</BehaviorLabel>
        <SelectDropDown className="behavior-dropdown" placeholder="My awesome campaign #5" />
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel>Frequency</BehaviorLabel>
        <SelectDropDown className="behavior-dropdown" placeholder="Match checkout settings" />
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel>Designation</BehaviorLabel>
        <SelectDropDown className="behavior-dropdown" placeholder="Match checkout settings" />
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel>Impact type</BehaviorLabel>
        <SelectDropDown className="behavior-dropdown" placeholder="Match checkout settings" />
      </BehaviorFieldWrapper>
      <BehaviorFieldWrapper>
        <BehaviorLabel>Title</BehaviorLabel>
        <Input
          containerClass="input-container"
          className="behavior-input"
          placeholder="Doante and support"
        />
      </BehaviorFieldWrapper>
      <ValuesFieldWrapper>
        <BehaviorLabel className="value-label">Values</BehaviorLabel>

        <ValueFieldsWrapper>
          {installment.map((name, index) => (
            <ValuesContainer key={index}>
              <DPIconDrag />
              <Input
                containerClass="value-container"
                className="value-input"
                placeholder="$3"
                id={name}
                onChange={(e) => handleChange(e, index)}
                name={name}
              />
              <DPIconDateArrow />
              <Input
                containerClass="families-container"
                className="families-input"
                placeholder="3 families"
              />
            </ValuesContainer>
          ))}
          <Button
            className="add-impact"
            type="button"
            onClick={(e) => {
              handleAdd(e);
            }}>
            Add impact lavel
          </Button>
        </ValueFieldsWrapper>
      </ValuesFieldWrapper>
    </BehaviourWrapper>
  );
}

export default Behavior;

export const BehaviourWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 3.3rem;
  margin-top: 3.2rem;
`;

export const BehaviorFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;
  margin-left: 6.4rem;
  gap: 0.8rem;

  font-size: ${FONTSIZES.small};

  .behavior-dropdown {
    max-width: 31.2rem;
    width: 100%;
  }
  .behavior-checkbox {
    margin-left: -2rem;
  }

  .behavior-input {
    max-width: 31.2rem;
    width: 100%;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
  }

  .input-container {
    max-width: 31.2rem;
    width: 100;
  }
`;

export const BehaviorLabel = styled.label`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;

export const BehaviorFooter = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: flex-end;

  .archive-btn {
    width: 10.7rem;
    height: 5.1rem;
  }

  .update-btn {
    width: 20.5rem;
    height: 5.1rem;
  }
`;

export const ValuesContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 37.5rem;
  align-items: center;
  background-color: ${COLORS.torquoise};
  padding: 0.8rem 3.2rem 0.8rem 1.6rem;
  height: 6.4rem;
  border: 1px solid #e6eff1;
  border-radius: 5px;
  margin-bottom: 2.4rem;

  .value-container {
    max-width: 9.5rem;
    width: 100%;
    margin-left: 2.8rem;
    margin-right: 2.25rem;
  }
  .value-input {
    max-width: 9.5rem;
    width: 100%;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    margin-bottom: 0rem;
  }

  .families-container {
    max-width: 13.6rem;
    width: 100%;
    margin-left: 2.25rem;
  }

  .families-input {
    max-width: 13.6rem;
    width: 100%;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    margin-bottom: 0rem;
  }
`;

export const ValueFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .add-impact {
    max-width: 17.1rem;
    width: 100%;
    height: 4rem;
    background-color: ${COLORS.white};
    border: 1px solid ${COLORS.pink};
    border-radius: 5px;
    font-size: ${FONTSIZES.small};
    line-height: 152.69%;
    color: ${COLORS.pink};
  }
`;

export const ValuesFieldWrapper = styled.div`
  display: flex;
  margin-bottom: 2.4rem;
  margin-left: 6.4rem;
  gap: 0.8rem;
  .value-label {
    margin-top: 2rem;
  }
`;
