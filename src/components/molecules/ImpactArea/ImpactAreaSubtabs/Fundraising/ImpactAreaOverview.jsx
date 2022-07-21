import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconEditDots } from 'icons';
import React from 'react';
import styled from 'styled-components';

function ImpactAreaOverview() {
  return (
    <CardWrapper>
      <ContentsWrapper>
        <div className="icon-container">
          <DPIconEditDots className="icon-container__pen-icon" />
        </div>

        <div className="primary">
          <p className="primary__heading">Name</p>
          <p className="primary__email">Outreach Program</p>
        </div>
        <Line />
        <div className="primary">
          <h2 className="primary__heading">Description</h2>
          <p className="primary__email">Lorem Ipsum</p>
        </div>
        <Line />
      </ContentsWrapper>
    </CardWrapper>
  );
}

export default ImpactAreaOverview;

const CardWrapper = styled(Card)`
  padding: 0 0.8rem 2rem 0.8rem;
  height: 100%;
  overflow: auto;
`;

const ContentsWrapper = styled.div`
  height: 100%;
  .icon-container {
    display: flex;
    justify-content: flex-end;
    position: relative;
    right: 2.4rem;
    bottom: 0;
    top: 1.6rem;
    &__pen-icon {
      width: 2.6rem;
    }
  }

  .highlight {
    padding: 9.954rem 0 0 2.526rem;
    &__heading {
      color: ${COLORS.deepPurple};
      font-weight: ${FONTWEIGHTS.medium};
      font-size: ${FONTSIZES.base};
    }

    &__phone {
      color: ${COLORS['grey-200']};
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.xsmall};
      padding-top: 3.2rem;
    }
    &__phone-number {
      color: ${COLORS.deepPurple};
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.small};
      padding-top: 0.8rem;
    }
  }

  .primary {
    padding: 2.4rem 0 0 2.526rem;
    &__heading {
      color: ${COLORS['grey-200']};
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.xsmall};
    }
    &__email {
      color: ${COLORS.deepPurple};
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.small};
      padding-top: 0.8rem;
    }
  }
`;

const Line = styled.div`
  width: 33.028rem;
  border: 0.1rem ${COLORS.torquoise} solid;
  margin-top: 1.6rem;
`;
