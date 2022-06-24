import RadioGroup from 'components/atoms/RadioGroup';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function Emarketing() {
  const fundRaiseData = [
    {
      header: 'Email Marketing Open Rate',
      text: 'An aggregate of the percentage of email recipients who open all email marketings over the past 30 days.'
    },
    {
      header: 'Email Marketing Click Rate',
      text: 'Median of recurring gifts.'
    },
    {
      header: 'Average Gift Size',
      text: 'An aggregate of the percentage of recipients who clicked a link in your email, out of those who opened it, over the past 30 days.'
    },
    {
      header: 'Email Marketing Second Open Rate',
      text: 'An aggregate of the the percentage of email recipients who re-open the same email marketings over the past 30 days.'
    }
  ];
  return (
    <EmarketingFormWrapper>
      {fundRaiseData.map(({ header, text }, idx) => (
        <EmarketingWrapper key={idx}>
          <EmarketingContainer>
            <div className="text-container">
              <EmarketingHeader>{header}</EmarketingHeader>
              <EmarketingText>{text}</EmarketingText>
            </div>
            <div className="action-btn">
              <RadioGroup
                pink
                radioData={[
                  {
                    labelText: '',
                    value: text
                  }
                ]}
              />
            </div>
          </EmarketingContainer>
        </EmarketingWrapper>
      ))}
    </EmarketingFormWrapper>
  );
}

export default Emarketing;

const EmarketingFormWrapper = styled.form``;

const EmarketingWrapper = styled.div`
  padding: 2.2rem 2.4rem 1.8rem 2rem;
  background: transparent;
  border: 1px solid ${COLORS.torquoise};
  margin: 2.4rem 2.4rem 1rem 2.4rem;
`;
const EmarketingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EmarketingHeader = styled.h2`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.bold};
  margin-bottom: 1rem;
  color: ${COLORS.deepPurple};
`;

const EmarketingText = styled.p`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
  color: ${COLORS['grey-400']};
  max-width: 50.3rem;
  word-break: break-word;
`;
