import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function DonationAssociation({ IncrementTab, DecrementTab, formik }) {
  const { pledgeData } = useSelector((state) => state.donation);

  const { campaigns } = useSelector((state) => state.campaign);

  const pledgeOptions = pledgeData?.map((current) => ({
    value: current?.id,
    label: current?.name
  }));

  const campaignOptions = campaigns?.map((current) => ({
    value: current?.id,
    label: current?.name
  }));

  return (
    <AssociationWrapper>
      <Card className="association-card">
        <AssociationLabel>
          <p className="association-label">Pledge</p>
          <SelectDropDown
            className="association-field "
            options={pledgeOptions}
            id="pledge"
            name="pledge"
            type={'text'}
            placeholder="Currency"
            value={formik.values.pledge}
            onChange={(value) => formik.setFieldValue('pledge', value.value)}
            onBlur={formik.handleBlur}
          />
        </AssociationLabel>
        <AssociationLabel>
          <p className="association-label">Campaign</p>
          <SelectDropDown
            className="association-field "
            options={campaignOptions}
            id="campaign"
            name="campaign"
            type={'text'}
            placeholder="Currency"
            value={formik.values.campaign}
            onChange={(value) => formik.setFieldValue('campaign', value.value)}
            onBlur={formik.handleBlur}
          />
        </AssociationLabel>
        <AssociationLabel>
          <p className="association-label">Impact Area</p>
          <SelectDropDown
            className="association-field "
            options={pledgeOptions}
            id="impactArea"
            name="impactArea"
            type={'text'}
            placeholder="Currency"
            value={formik.values.impactArea}
            onChange={(value) => formik.setFieldValue('impactArea', value.value)}
            onBlur={formik.handleBlur}
          />
        </AssociationLabel>

        <AssociationInput>
          <p className="association-label">Dedication</p>
          <Input
            className="association-input"
            autoWidth
            id="dedication"
            name="dedication"
            placeholder="Dedication"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dedication}
          />
        </AssociationInput>
        <AssociationInput>
          <p className="association-label">Notes</p>
          <Input
            className="association-input"
            autoWidth
            id="note"
            name="note"
            placeholder="Notes"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.note}
          />
        </AssociationInput>

        <div className="association-footer">
          <Button
            invert
            auth
            className="association-cancel-btn"
            onClick={DecrementTab}
            type="button">
            Back
          </Button>
          <Button type="button" auth className="association-save-btn" onClick={IncrementTab}>
            Next
          </Button>
        </div>
      </Card>
    </AssociationWrapper>
  );
}

export default DonationAssociation;

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
  .association-field {
    margin-bottom: 2.4rem;
  }
`;

const AssociationInput = styled.div`
  .association-label {
    margin-bottom: 0.8rem;
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS['grey-500']};
  }
  .association-input {
    border: 1px solid ${COLORS['moore-grey']};
    border-radius: 0.5rem;
    margin-bottom: 2.4rem;
    background-color: transparent;
  }
`;
