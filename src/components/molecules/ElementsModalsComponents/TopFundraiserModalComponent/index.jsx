import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import CopyField from 'components/atoms/CopyField';
import Input from 'components/atoms/Input/Input';
import Tabs from 'components/molecules/Tabs';
import React from 'react';
import Appearance from './Appearance';
import Behavior from './Behavior';
import {
  CopyWrapper,
  FormLabel,
  TopFundraiserFieldWrapper,
  TopFundraiserFooter,
  TopFundraiserFormWrapper,
  TopFundraiserHeaderText,
  TopFundraiserLabel
} from './styles';

function TopFundraiserModalComponent() {
  const tabs = [
    { title: 'BEHAVIOUR', component: <Behavior /> },
    { title: 'APPEARANCE', component: <Appearance /> }
  ];
  return (
    <TopFundraiserFormWrapper>
      <Card className="topfundraiser-card">
        <TopFundraiserHeaderText>
          Shows a list of your supporters ordered by how much they’ve personally donated.
        </TopFundraiserHeaderText>
        <TopFundraiserFieldWrapper>
          <TopFundraiserLabel>Element name</TopFundraiserLabel>
          <Input className="topfundraiser__input" placeholder="Top Fundraiser #3" />
        </TopFundraiserFieldWrapper>
      </Card>
      <Tabs tabs={tabs} inline />
      <Card className="topfundraiser-card">
        <CopyWrapper>
          <FormLabel>HTML CODE</FormLabel>
          <CopyField grey></CopyField>
        </CopyWrapper>
        <TopFundraiserFooter>
          <Button className="archive-btn" invert auth>
            Archive
          </Button>

          <Button className="update-btn" auth>
            Update Element
          </Button>
        </TopFundraiserFooter>
      </Card>
    </TopFundraiserFormWrapper>
  );
}

export default TopFundraiserModalComponent;
