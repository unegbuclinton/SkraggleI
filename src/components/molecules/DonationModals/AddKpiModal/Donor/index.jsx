import RadioGroup from 'components/atoms/RadioGroup';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function DonorKpi() {
  const { kpiData } = useSelector((state) => state.donation);
  const donorData = kpiData.donor;
  // const donationData = [
  //   {
  //     header: 'Contact List Size (Individuals + Companies)',
  //     text: 'Total number of contacts (current and potential donors)'
  //   },
  //   {
  //     header: 'Contact List Growth Rate',
  //     text: 'The rate at which your contact list is growing monthly.'
  //   },
  //   {
  //     header: 'Contacts Acquired (Monthly)',
  //     text: 'Number of new contacts added each month'
  //   },
  //   {
  //     header: 'Donor List Size',
  //     text: 'The number of contacts in your database who have donated'
  //   },
  //   {
  //     header: 'Donor Acquisition Rate (Monthly)',
  //     text: 'The rate at which your donor list is growing monthly.'
  //   },
  //   {
  //     header: 'Recurring Donor Acquisition Rate (Monthly)',
  //     text: 'Percentage of recurring donors acquired month-to-month.'
  //   },
  //   {
  //     header: 'New Donors Acquired (Monthly)',
  //     text: 'Number of new donors acquired in the last month'
  //   },
  //   {
  //     header: 'Second Gift Conversion Rate',
  //     text: 'Fraction of donors in your database who have given at least twice'
  //   },
  //   {
  //     header: 'Donor Lifetime Value',
  //     text: 'How much revenue a single donor is likely to generate from the moment they first donate to the time they lapse.'
  //   },
  //   {
  //     header: 'Donor Lifetime Value (<$100 Segment)',
  //     text: 'How much revenue a single donor from your "Under $100 segment" is likely to generate from the moment they first donate to the time they lapse.'
  //   },
  //   {
  //     header: 'Donor Lifetime Value ($500-2000 Segment)',
  //     text: 'How much revenue a single donor from your "$500-$2000" segment is likely to generate from the moment they first donate to the time they lapse.'
  //   },
  //   {
  //     header: 'Donor Lifetime Value ($2,000+ Segment)',
  //     text: 'How much revenue a single donor from your "$2000+" segment is likely to generate from the moment they first donate to the time they lapse.'
  //   },

  //   {
  //     header: 'Recurring Donor Lifetime Value',
  //     text: 'Average amount a recurring donor is likely to contribute over their philanthropic lifespan.'
  //   },
  //   {
  //     header: 'Donor Retention Rate',
  //     text: 'The percentage of donors who give to your organization one year and then give again the following year.'
  //   },
  //   {
  //     header: 'Recurring Donor Retention Rate',
  //     text: 'Percentage of recurring donors retained month-to-month.'
  //   },
  //   {
  //     header: 'Donor Churn Rate',
  //     text: 'Fraction of donors who have not given to your organization for more than a year.'
  //   }
  // ];
  return (
    <DonorFormWrapper>
      {donorData.map(({ description, label }, idx) => (
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
