import RadioGroup from 'components/atoms/RadioGroup';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function DonorKpi() {
  const { kpiData } = useSelector((state) => state.donation);
  const donorData = kpiData?.donor;

  return (
    <DonorFormWrapper>
      {donorData?.map(({ description, label }, idx) => (
        <DonorWrapper key={idx}>
          <DonorContainer>
            <div className="text-container">
              <DonorHeader>{label}</DonorHeader>
              <DonorText>{description}</DonorText>
            </div>
            <div className="action-btn">
              <RadioGroup
                pink
                radioData={[
                  {
                    labelText: '',
                    value: label
                  }
                ]}
              />
            </div>
          </DonorContainer>
        </DonorWrapper>
      ))}
    </DonorFormWrapper>
  );
}

export default DonorKpi;

const DonorFormWrapper = styled.form``;

const DonorWrapper = styled.div`
  padding: 2.2rem 2.4rem 1.8rem 2rem;
  max-width: 60.2rem;
  background: transparent;
  border: 1px solid ${COLORS.torquoise};
  margin: 2.4rem 2.4rem 1rem 2.4rem;
`;
const DonorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DonorHeader = styled.h2`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.bold};
  margin-bottom: 1rem;
  color: ${COLORS.deepPurple};
`;

const DonorText = styled.p`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
  color: ${COLORS['grey-400']};
  max-width: 50.3rem;
  word-break: break-word;
`;
