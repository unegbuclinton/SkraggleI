import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import CopyField from 'components/atoms/CopyField';
import Input from 'components/atoms/Input/Input';
import Tabs from 'components/molecules/Tabs';
import { useElement } from 'context';
import { BasicElement } from 'lib';
import React, { useEffect, useMemo } from 'react';
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

function SimpleFormModalComponent({
  formSize,
  formSizeChange,
  textColorChange,
  textColor,
  backgroundColorChange,
  backgroundColor,
  borderSize,
  borderSizeChange,
  borderRadius,
  borderRadiusChange,
  borderColorChange,
  borderColor,
  amountLabelChange,
  showAmountShadowChange,
  buttonLabelChange,
  labelColorChange,
  labelColor,
  buttonColorChange,
  buttonColor,
  buttonBorder,
  buttonBorderChange,
  buttonRadius,
  buttonRadiusChange,
  buttonBorderColorChange,
  buttonBorderColor,
  showButtonShadowChange
}) {
  const tabs = [
    { title: 'BEHAVIOUR', component: <Behavior /> },
    { title: 'FORM', component: <Form formSizeChange={formSizeChange} formSize={formSize} /> },
    {
      title: 'AMOUNT',
      component: (
        <Amount
          textColorChange={textColorChange}
          textColor={textColor}
          backgroundColorChange={backgroundColorChange}
          backgroundColor={backgroundColor}
          borderSize={borderSize}
          borderSizeChange={borderSizeChange}
          borderRadius={borderRadius}
          borderRadiusChange={borderRadiusChange}
          borderColorChange={borderColorChange}
          borderColor={borderColor}
          amountLabelChange={amountLabelChange}
          showAmountShadowChange={showAmountShadowChange}
        />
      )
    },
    {
      title: 'BUTTONS',
      component: (
        <Buttons
          buttonLabelChange={buttonLabelChange}
          labelColorChange={labelColorChange}
          labelColor={labelColor}
          buttonColorChange={buttonColorChange}
          buttonColor={buttonColor}
          buttonBorder={buttonBorder}
          buttonBorderChange={buttonBorderChange}
          buttonRadius={buttonRadius}
          buttonRadiusChange={buttonRadiusChange}
          buttonBorderColorChange={buttonBorderColorChange}
          buttonBorderColor={buttonBorderColor}
          showButtonShadowChange={showButtonShadowChange}
        />
      )
    },
    { title: 'CUSTOM FIELDS', component: <CustomFields /> }
  ];

  const { elementConfig, setElementConfig } = useElement();

  useEffect(() => {
    setElementConfig((draft) => {
      draft.type = 'simple-form';
      // draft.parentStyle = { ...draft.parentStyle };
    });
  }, []);

  const htmlCode = useMemo(() => {
    return new BasicElement(elementConfig).toString();
  }, [JSON.stringify(elementConfig)]);

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
          <CopyField value={htmlCode} grey></CopyField>
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
