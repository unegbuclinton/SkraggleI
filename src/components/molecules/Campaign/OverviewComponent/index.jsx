import CustomDropdown from 'components/atoms/CustomDropdown/CustomDropdown';
import React from 'react';
import { LeftSection, MainWrapper, RightSection } from './styles';

const CampaignOverview = () => {
  const data = [
    {
      id: '1',
      name: 'Action',
    },
    {
      id: '2',
    name: 'Add',
    },
    {
      id: '3',
      name: 'Delete',
    },
    {
      id: '4',
      name: 'Modify',
    },
  ];
  return (
    <MainWrapper>
      <LeftSection>
        <section className="action-button">
          <CustomDropdown data={data}></CustomDropdown>
        </section>
      </LeftSection>

      <RightSection></RightSection>
    </MainWrapper>
  );
};

export default CampaignOverview;
