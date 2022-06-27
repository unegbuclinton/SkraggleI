import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Input from 'components/atoms/Input/Input';
// import DashboardLayout from 'components/layouts/DashboardLayout';
import FormCardLayout from 'components/layouts/FormCardLayout';
import DonationSetupFormComponent from 'components/molecules/Forms/donationSetup/DonationSetupFormComponent';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';
// import FormsSubTab from '..';
import UrlModalComponent from '../ModalComponent/modal';

function Url({ DecrementTab }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <UrlModalComponent
        isShown={open}
        onClose={() => {
          setOpen(false);
        }}
      />
      <ThankYouWrapper>
        <ThankYouContainer>
          <ThankYouCardWrapper>
            <Heading>Checkout URL</Heading>
            <UrlText>Only letters, numbers, - and _ are allowed. Max 25 characters.</UrlText>
            <Input type="text" className="input-field" />
            <Link>
              https://www.biggorillaapps.com?form=<span className="link">FUNDDKCUBQC</span>
            </Link>
            <ButtonContainer>
              <Button type="button" className="back-button" invert auth onClick={DecrementTab}>
                Back
              </Button>
              <Button type="submit" onClick={() => setOpen(true)} className="continue">
                Done
              </Button>
            </ButtonContainer>
          </ThankYouCardWrapper>
        </ThankYouContainer>
        <FormCardLayout>
          <DonationSetupFormComponent />
        </FormCardLayout>
      </ThankYouWrapper>
    </>
  );
}

export default Url;

const ThankYouWrapper = styled.div`
  display: flex;
  gap: 1.692rem;
  height: 100%;
  overflow: hidden;
  /* padding-bottom: 12.5rem; */
  .input-field {
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-right: 0.4rem;
  }
`;
const Link = styled.p`
  font-weight: ${FONTWEIGHTS.bold};
  font-size: ${FONTSIZES.small};
  color: ${COLORS.deepPurple};
  .link {
    color: ${COLORS.pink};
  }
`;

const ThankYouCardWrapper = styled(Card)`
  height: 100%;
  overflow: auto;
  padding: 4rem 2.4rem 0rem 4.4rem;
`;

const Heading = styled.h1`
  font-weight: ${FONTWEIGHTS.medium};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['header-grey']};
  margin-bottom: 0.8rem;
`;

const UrlText = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.xsmall};
  color: ${COLORS['grey-200']};
  margin-bottom: 1.75rem;
`;

const ThankYouContainer = styled(Card)`
  flex: 0.65;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ButtonContainer = styled.div`
  margin-top: 35.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
  margin-bottom: 1.6rem;

  .back-button {
    width: 10.7rem;
    height: 5.1rem;
    background-color: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    border-radius: 0.340356rem;
    color: ${COLORS['gray-500']};
    font-size: ${FONTSIZES.base};
    font-weight: ${FONTWEIGHTS.xbold};
  }
  .continue {
    width: 14rem;
    height: 4.8rem;
    border-radius: 0.5rem;
  }
`;
