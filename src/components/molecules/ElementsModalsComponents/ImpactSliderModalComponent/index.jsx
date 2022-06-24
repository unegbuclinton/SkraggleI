import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import CopyField from 'components/atoms/CopyField';
import Input from 'components/atoms/Input/Input';
import Tabs from 'components/molecules/Tabs';
import React from 'react';
import Behavior from './Behavior';
import Buttons from './Button';
import CustomField from './CustomField';
import Form from './Forms';
import Label from './Label';
import {
  CopyWrapper,
  FormLabel,
  ImpactSliderFieldWrapper,
  ImpactSliderFooter,
  ImpactSliderFormWrapper,
  ImpactSliderLabel,
  ImpactSliderrHeaderText
} from './styles';

function DonateFormModalComponent() {
  const tabs = [
    { title: 'BEHAVIOR', component: <Behavior /> },
    { title: 'FORM', component: <Form /> },
    { title: 'BUTTONS', component: <Buttons /> },
    { title: 'LABEL', component: <Label /> },
    { title: 'CUSTOM FIELDS', component: <CustomField /> }
  ];
  return (
    <ImpactSliderFormWrapper>
      <Card className="impact-slider__card">
        <ImpactSliderrHeaderText>
          Engage supporters with a customizable interactive slider that shows their ImpactSlider’s
          impact.
        </ImpactSliderrHeaderText>
        <ImpactSliderFieldWrapper>
          <ImpactSliderLabel>Element name</ImpactSliderLabel>
          <Input className="impact-slider__input" placeholder="Impact Slider #3" />
        </ImpactSliderFieldWrapper>
      </Card>
      <Tabs tabs={tabs} inline />
      <Card className="impact-slider__card">
        <CopyWrapper>
          <FormLabel>HTML CODE</FormLabel>
          <CopyField grey></CopyField>
        </CopyWrapper>
        <ImpactSliderFooter>
          <Button className="archive-btn" invert auth>
            Archive
          </Button>

          <Button className="update-btn" auth>
            Update Element
          </Button>
        </ImpactSliderFooter>
      </Card>
    </ImpactSliderFormWrapper>
  );
}

export default DonateFormModalComponent;
