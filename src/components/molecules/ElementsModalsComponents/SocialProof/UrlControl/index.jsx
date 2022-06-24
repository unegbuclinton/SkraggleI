import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function UrlConrol() {
  return (
    <VisibilityWrapper>
      <VisibilityInfo>
        By default, element is displayed on every page of your website. URL control allows you to
        limit the pages on which element appears.
      </VisibilityInfo>
      <UrlContainer>
        <UrlLabel>
          Only show element at these URLs
          <span>?</span>
        </UrlLabel>
        <TextArea
          type="text"
          placeholder="https:/example.com/
https:/example.com/
https:/example.com/
https:/example.com/"
        />
      </UrlContainer>
      <UrlContainer className="container">
        <UrlLabel>
          Only show element at these URLs
          <span>?</span>
        </UrlLabel>
        <TextArea
          type="text"
          placeholder="https:/example.com/
https:/example.com/
https:/example.com/
https:/example.com/"
        />
      </UrlContainer>
    </VisibilityWrapper>
  );
}

export default UrlConrol;

const VisibilityWrapper = styled.div`
  .dropdown {
    width: 30.6rem;
  }

  .container {
    margin-bottom: 2.4rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 11.6rem;
  background-color: ${COLORS.white};
  border: 0.1rem solid ${COLORS['gray-500']};
  border-radius: 0.5rem;
  padding: 1.5rem;
`;

const VisibilityInfo = styled.h2`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-400']};
  line-height: 2.7rem;
  padding: 0 3.2rem 0 3.2rem;
`;

const UrlContainer = styled.div`
  padding: 2.4rem 2.4rem 0 3.2rem;
`;

const UrlLabel = styled.h2`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
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
    margin: 0.1rem 0 0 1.6rem;
  }
`;
