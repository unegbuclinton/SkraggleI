import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Input from 'components/atoms/Input/Input';
import React from 'react';

import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

function ImpactAreaModalComponent() {
  return (
    <ImpactAreaFormWrapper>
      <Card className="impactArea-card">
        <ImpactAreaFieldWrapper>
          <ImpactAreaLabel>IMPACT AREA NAME</ImpactAreaLabel>
          <Input className="impactArea__input" placeholder="Lorem Ipsum" />
        </ImpactAreaFieldWrapper>
        <ImpactAreaFieldWrapper>
          <ImpactAreaLabel>DESCRIPTION</ImpactAreaLabel>
          <textarea className="impactArea__description" placeholder="Lorem Ipsum" />
        </ImpactAreaFieldWrapper>
      </Card>
      <Card className="impactArea-card__footer">
        <ImpactAreaFooter>
          <Button className="cancel-btn" invert auth>
            Cancel
          </Button>

          <Button className="save-btn" auth>
            Save
          </Button>
        </ImpactAreaFooter>
      </Card>
    </ImpactAreaFormWrapper>
  );
}

export default ImpactAreaModalComponent;

const ImpactAreaFormWrapper = styled.div`
  .impactArea-card {
    padding: 3.2rem 2.4rem 2.4rem 2.4rem;

    &__footer {
      padding: 0rem 2.4rem 2.4rem 2.4rem;
    }
  }
`;

const ImpactAreaFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: space-between;
  margin-bottom: 2.4rem;

  .impactArea__input {
    width: 100%;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    font-weight: ${FONTWEIGHTS.medium};
    font-size: ${FONTSIZES.small};
    line-height: 152.69%;
    color: ${COLORS.black};
  }
  .impactArea__description {
    resize: none;
    border: 1px solid ${COLORS['gray-500']};
    border-radius: 5px;
    display: flex;
    min-height: 25.4rem;
    width: 100%;
    background: ${COLORS.white};
    padding: 2.3rem 2.1rem;
    font-weight: ${FONTWEIGHTS.medium};
    font-size: ${FONTSIZES.small};
    line-height: 152.69%;
    color: ${COLORS.black};
  }
`;

const ImpactAreaLabel = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-size: ${FONTSIZES.small};
  line-height: 152.69%;
  display: flex;
  color: ${COLORS['grey-200']};
`;

const ImpactAreaFooter = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: flex-end;

  .cancel-btn {
    width: 10.7rem;
    height: 5.1rem;
  }

  .save-btn {
    width: 20.5rem;
    height: 5.1rem;
  }
`;
