import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function SupportTabFormComponent() {
  return (
    <TabFormComponentWrapper>
      <Card className="tab-form__card">
        <Input className="tab-form__input" placeholder="First Name" autoWidth />
        <Input className="tab-form__input" placeholder="Last Name" autoWidth />
        <Input className="tab-form__input" placeholder="Email Address" autoWidth />
        <Input className="tab-form__input" placeholder="Phone Number" autoWidth />
        <Checkbox
          className="tab-form__check-box"
          label="Donate as a business"
          styledClass="tab-box"
        />
        <Checkbox
          className="tab-form__check-box"
          label="Donate anonysmously"
          styledClass="tab-box"
        />
        <TabFormComponentContainer>
          <Button className="tab-btn" auth>
            Donate $25/month
          </Button>
        </TabFormComponentContainer>
      </Card>
    </TabFormComponentWrapper>
  );
}

export default SupportTabFormComponent;

const TabFormComponentWrapper = styled.div`
  .tab-form__card {
    padding: 1.627rem 2.157rem 2.201rem 2.197rem;

    .tab-form__input {
      background: ${COLORS.white};
      border: 0.920602px solid ${COLORS.torquoise};
      padding-left: 2.4rem;
    }

    .tab-form__check-box {
      color: ${COLORS['gray-600']};
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHTS.medium};
      margin-top: 1.6rem;
    }

    .tab-box {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;
const TabFormComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5.895rem;

  .tab-btn {
    width: 30.185rem;
    height: 5.105rem;
    font-weight: ${FONTWEIGHTS.bold};
    font-size: ${FONTSIZES.small};
  }
`;
