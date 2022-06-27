import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function RecurringAssociation({ DecrementTab, formik }) {
  const { campaigns } = useSelector((state) => state.campaign);

  const campaignOptions = campaigns?.map((current) => ({
    value: current?.id,
    label: current?.name
  }));

  return (
    <AssociationWrapper onSubmit={formik.handleSubmit}>
      <Card className="association-card">
        <AssociationLabel>
          <p className="association-label">Impact Area</p>
          <SelectDropDown
            className="association-dropdown "
            id="impactArea"
            name="impactArea"
            type={'text'}
            placeholder="Area"
            value={formik.values.impactArea}
            onChange={(value) => formik.setFieldValue('impactArea', value.value)}
            onBlur={formik.handleBlur}
          />{' '}
        </AssociationLabel>
        <AssociationLabel>
          <p className="association-label">Campaign</p>
          <SelectDropDown
            className="association-dropdown "
            options={campaignOptions}
            id="campaign"
            name="campaign"
            type={'text'}
            placeholder="Campaign"
            value={formik.values.campaign}
            onChange={(value) => formik.setFieldValue('campaign', value.value)}
            onBlur={formik.handleBlur}
          />
        </AssociationLabel>

        <AssociationLabel>
          <p className="association-label">Dedication</p>
          <Input
            className="association-input"
            id="dedication"
            name="dedication"
            placeholder="Dedication"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dedication}
          />
        </AssociationLabel>
        <AssociationLabel>
          <p className="association-label">Notes</p>
          <TextArea
            id="note"
            name="note"
            placeholder="Note"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.note}
          />
        </AssociationLabel>

        <div className="association-footer">
          <Button
            type="button"
            invert
            auth
            className="association-cancel-btn"
            onClick={DecrementTab}>
            Back
          </Button>
          <Button auth className="association-save-btn" type="submit">
            Save
          </Button>
        </div>
      </Card>
    </AssociationWrapper>
  );
}

export default RecurringAssociation;

const AssociationWrapper = styled.form`
  .association-card {
    padding: 3.2rem 2.4rem 2.4rem 2.4rem;

    .association-footer {
      display: flex;
      justify-content: flex-end;
      gap: 1.6rem;
      margin-top: 10.8rem;

      .association-cancel-btn {
        width: 10.7rem;
        height: 5.1rem;
      }
      .association-save-btn {
        width: 20.5rem;
        height: 5.1rem;
      }
    }
  }
`;

const AssociationLabel = styled.div`
  .association-label {
    margin-bottom: 0.8rem;
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS['grey-500']};
  }
  .association-dropdown {
    margin-bottom: 2.4rem;
  }
  .association-input {
    width: 60.2rem;

    border: 1px solid ${COLORS['moore-grey']};
    border-radius: 0.5rem;
    margin-bottom: 2.4rem;
    background-color: transparent;
  }
`;

const TextArea = styled.textarea`
  width: 60.2rem;
  height: 11.8rem;
  border-radius: 0.5rem;
  outline: none;
  resize: none;
  border: 1px solid ${COLORS['moore-grey']};
  padding: 1rem;
`;
