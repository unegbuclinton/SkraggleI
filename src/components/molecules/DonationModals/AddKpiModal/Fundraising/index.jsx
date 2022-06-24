import RadioGroup from 'components/atoms/RadioGroup';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function Fundraising() {
  const fundRaiseData = [
    {
      header: 'Median Gift Size',
      text: 'Your average gift size can often be skewed by a few small or large donations. Looking instead at your median gift size gives a better indication of the "middle" of your data. This KPI tells you the typical gift size your organization received. The median is computed by organizing all gifts in order from smallest to largest, then selecting the middle value in the data set.'
    },
    {
      header: 'Recurring Donor Median Gift Size',
      text: 'Median of recurring gifts.'
    },
    {
      header: 'Average Gift Size',
      text: 'The average size of a gift (donation) from your donors.'
    },
    {
      header: 'Recurring Donor Average Gift Size',
      text: 'Mean of recurring gifts.'
    },
    {
      header: 'Fraction Of Gifts From Campaigns',
      text: 'Percentage of total gifts that were made to a campaign'
    },
    {
      header: 'Fraction Of Donations From Small Gifts',
      text: 'Small gifts are important as they have the chance to grow with effective stewardship, or drop off all together as donors lapse. Make sure you are aware of how many "small gifts" you have as a percentage of the whole to always balance these with other categories and ensure you are nurturing them into other categories over time.'
    },
    {
      header: 'Fraction Of Donations From Major Gifts',
      text: 'Just like its important to understand how many donors are in the smallest 25%, you need to know how many major donors you are stewarding. This number should grow over time if you are doing well at stewarding donors and developing their commitment to your cause and trust in your organization.'
    },
    {
      header: 'Percentage Of Gifts From Online (Year To Date)',
      text: 'Fraction of donations received from online donation forms calculated as a percentage of your total donations year to date. Note: This metric is only tracked for donations made in Keela'
    },
    {
      header: 'Recurring Donations Growth Rate',
      text: 'Rate of growth in funds from recurring donation programs.'
    },
    {
      header: 'Recurring Donations As A Percentage Of Total Funds Raised',
      text: 'Percentage of your total donations that come from recurring gifts'
    },
    {
      header: 'Recurring Donors As A Percentage Of Total Donors',
      text: 'Fraction of your donors who give recurring gifts'
    }
  ];
  return (
    <FundraisingFormWrapper>
      {fundRaiseData.map(({ header, text }, idx) => (
        <FundraisingWrapper key={idx}>
          <FundraisingContainer>
            <div className="text-container">
              <FundraisingHeader>{header}</FundraisingHeader>
              <FundraisingText>{text}</FundraisingText>
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
          </FundraisingContainer>
        </FundraisingWrapper>
      ))}
    </FundraisingFormWrapper>
  );
}

export default Fundraising;

const FundraisingFormWrapper = styled.form``;

const FundraisingWrapper = styled.div`
  padding: 2.2rem 2.4rem 1.8rem 2rem;
  max-width: 60.2rem;
  background: transparent;
  border: 1px solid ${COLORS.torquoise};
  margin: 2.4rem 2.4rem 1rem 2.4rem;
`;
const FundraisingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FundraisingHeader = styled.h2`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.bold};
  margin-bottom: 1rem;
  color: ${COLORS.deepPurple};
`;

const FundraisingText = styled.p`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
  color: ${COLORS['grey-400']};
  max-width: 50.3rem;
  word-break: break-word;
`;
