import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import CopyField from 'components/atoms/CopyField';
import Input from 'components/atoms/Input/Input';
import Tabs from 'components/molecules/Tabs';
import React from 'react';
import Amount from './Amount';
import Behavior from './Behavior';
import Buttons from './Button';
import CustomFields from './CustomFields';
import Form from './Form';
import {
  CopyWrapper,
  DonationFieldWrapper,
  DonationFooter,
  DonationFormWrapper,
  DonationLabel,
  DonationrHeaderText,
  FormLabel
} from './styles';

function SimpleFormModalComponent() {
  const tabs = [
    { title: 'BEHAVIOUR', component: <Behavior /> },
    { title: 'FORM', component: <Form /> },
    { title: 'AMOUNT', component: <Amount /> },
    { title: 'BUTTONS', component: <Buttons /> },
    { title: 'CUSTOM FIELDS', component: <CustomFields /> }
  ];
  return (
    <DonationFormWrapper>
      <Card className="goalmeter-card">
        <DonationrHeaderText>
          Display a customizable donation form anywhere on your website.
        </DonationrHeaderText>
        <DonationFieldWrapper>
          <DonationLabel>Element name</DonationLabel>
          <Input className="goal-meter__input" placeholder="Donation Form #3" />
        </DonationFieldWrapper>
      </Card>
      <Tabs tabs={tabs} inline />
      <Card className="goalmeter-card">
        <CopyWrapper>
          <FormLabel>HTML CODE</FormLabel>
          <CopyField grey></CopyField>
        </CopyWrapper>
        <DonationFooter>
          <Button className="archive-btn" invert auth>
            Archive
          </Button>

          <Button className="update-btn" auth>
            Update Element
          </Button>
        </DonationFooter>
      </Card>
    </DonationFormWrapper>
  );
}

export default SimpleFormModalComponent;
