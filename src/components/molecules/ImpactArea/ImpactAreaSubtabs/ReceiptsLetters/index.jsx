import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Switch from 'components/atoms/Switch/Switch';
import LogoComponent from 'components/molecules/LogoComponent';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function ReceiptsLetters() {
  return (
    <ReceiptsWrapper>
      <LogoHeadingWrapper>
        <HeaderWrapper>
          <div className="heading-text">Logo and Header</div>
          <div className="edit-button__wrapper">
            <Button className="edit-button">Edit</Button>
          </div>
        </HeaderWrapper>
        <LogoHeadingBody>
          <LogoComponent />
        </LogoHeadingBody>
      </LogoHeadingWrapper>
      <ReceiptDetailsWrapper>
        <HeaderWrapper>
          <div className="heading-text">Receipt Details</div>
        </HeaderWrapper>
        <ReceiptDetailsBody>
          <div className="description">
            View your organization&apos;s receipting details. You can set up under Organization
            Settings
          </div>
          <Button className="preview-button">Preview</Button>
        </ReceiptDetailsBody>
      </ReceiptDetailsWrapper>
      <AcknowledgementWrapper>
        <div className="header-acknowledgement">
          <div className="heading-acknowledgement">
            <h1>Acknowledgement Letters</h1>
            <p>
              Customize the messages of your acknowledgement letters. Otherwise the default Receipt
              Letter Settings will be used.
            </p>
          </div>
          <div className="customise">
            <Switch type />
            Customise
          </div>
        </div>
      </AcknowledgementWrapper>
    </ReceiptsWrapper>
  );
}

export default ReceiptsLetters;

const ReceiptsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  .heading-text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
  }
`;

const HeaderWrapper = styled(Card)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.torquoise};
  padding-bottom: 1.6rem;

  .edit-button {
    max-width: 9.6rem;
    width: 100%;
    height: 3.6rem;
    border: 1px solid #e2e6ff;
    border-radius: 5px;
    padding: 0.36rem 1.04rem;
    background-color: ${COLORS.white};
    color: ${COLORS['grey-400']};
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
  }
`;

const LogoHeadingWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
  padding: 1.6rem 2.4rem 2.4rem 1.6rem;
`;

const LogoHeadingBody = styled.div`
  padding: 3.2rem 0rem 2.4rem 1.6rem;
`;

const ReceiptDetailsWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 2.7rem 2.4rem 2.7rem 2.4rem;
`;

const ReceiptDetailsBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  border-bottom: 1px solid ${COLORS.torquoise};

  .description {
    color: ${COLORS['grey-200']};
  }

  .preview-button {
    max-width: 9.1rem;
    width: 100%;
    height: 3rem;
    background: ${COLORS['light-pink']};
    border: 1px solid ${COLORS.pink};
    border-radius: 4rem;
    color: ${COLORS.pink};
    justify-content: center;
    padding: 0rem;
  }
`;

const AcknowledgementWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 2.4rem 2.4rem;

  .header-acknowledgement {
    display: flex;
    justify-content: space-between;
  }

  .heading-acknowledgement {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .customise {
    display: flex;
    gap: 1.1rem;
    align-items: center;
  }
`;
