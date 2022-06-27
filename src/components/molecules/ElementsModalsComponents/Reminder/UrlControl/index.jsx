import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function UrlControl() {
  return (
    <UrlControlWrapper>
      <UrlControlInfo>
        By default, element is displayed on every page of your website. URL control allows you to
        limit the pages on which element appears.
      </UrlControlInfo>
      <UrlContainer>
        <UrlLabel>
          Only show element at these URLs
          <span>?</span>
        </UrlLabel>
        <Input className="visibility-input" type="text" />
      </UrlContainer>
      <UrlContainer>
        <UrlLabel>
          Only show element at these URLs
          <span>?</span>
        </UrlLabel>
        <Input className="visibility-input" type="text" />
      </UrlContainer>
    </UrlControlWrapper>
  );
}

export default UrlControl;

const UrlControlWrapper = styled.div`
  margin-top: 3.2rem;
  .visibility-input {
    width: 100%;
    height: 11.6rem;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
  }
`;

const UrlControlInfo = styled.h2`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.xlarge};
  color: ${COLORS['grey-400']};
  line-height: 2.8rem;
  padding: 0 3.2rem 0 3.2rem;
`;

const UrlContainer = styled.div`
  padding: 2.4rem 2.4rem 0 3.2rem;
`;

const UrlLabel = styled.h2`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-400']};
  padding-bottom: 1.6rem;
  display: flex;
  span {
    height: 1.4rem;
    width: 1.4rem;
    border: 0.1rem solid ${COLORS['grey-400']};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: small;
    margin: 0.3rem 0 0 1.6rem;
  }
`;
