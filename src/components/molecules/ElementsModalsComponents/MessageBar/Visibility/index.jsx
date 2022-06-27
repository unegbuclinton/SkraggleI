import SelectDropDown from 'components/atoms/GenericDropdown';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function VisibilityTab() {
  return (
    <VisibilityWrapper>
      <InputWrapper>
        <StickyButtonLabel>Show on</StickyButtonLabel>
        <Wrapper>
          <SelectDropDown
            className="dropdown"
            type="text"
            placeholder="Desktop and mobile browser"
          />
        </Wrapper>
      </InputWrapper>
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

export default VisibilityTab;

const VisibilityWrapper = styled.div`
  margin-top: 3.2rem;
  .dropdown {
    width: 30.6rem;
  }

  .container {
    margin-bottom: 4rem;
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

const InputWrapper = styled.div`
  display: flex;
  gap: 1.7rem;
  padding-left: 13rem;
  border-bottom: 0.2rem solid ${COLORS.torquoise};
  margin: 0 2rem 0 2rem;
`;

const StickyButtonLabel = styled.div`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  display: flex;
  align-items: center;
  height: 4.4rem;
`;

const Wrapper = styled.div`
  padding-bottom: 3.2rem;
`;

const VisibilityInfo = styled.h2`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.xlarge};
  color: ${COLORS['grey-400']};
  line-height: 2.7rem;
  padding: 3.2rem 3.2rem 0 3.2rem;
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
