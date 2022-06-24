import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Input from 'components/atoms/Input/Input';
import Tabs from 'components/molecules/Tabs';
import React from 'react';
import Appearance from './Appearance';
import Behavior from './Behavior';
import {
  RecentDonationFieldWrapper,
  RecentDonationFooter,
  RecentDonationFormWrapper,
  RecentDonationHeaderText,
  RecentDonationLabel
} from './styles';

function RecentDonationModalComponent() {
  const tabs = [
    { title: 'BEHAVIOUR', component: <Behavior /> },
    { title: 'APPEARANCE', component: <Appearance /> }
  ];
  return (
    <RecentDonationFormWrapper>
      <Card className="recent-donation__card">
        <RecentDonationHeaderText>
          Show a list of your most recent donations.
        </RecentDonationHeaderText>
        <RecentDonationFieldWrapper>
          <RecentDonationLabel>Element name</RecentDonationLabel>
          <Input className="recent-donation__input" placeholder="Recent Donations #2" />
        </RecentDonationFieldWrapper>
      </Card>
      <Tabs tabs={tabs} inline />
      <Card className="recent-donation__footer">
        <RecentDonationFooter>
          <Button className="archive-btn" invert auth>
            Archive
          </Button>

          <Button className="update-btn" auth>
            Update Element
          </Button>
        </RecentDonationFooter>
      </Card>
    </RecentDonationFormWrapper>
  );
}

export default RecentDonationModalComponent;
