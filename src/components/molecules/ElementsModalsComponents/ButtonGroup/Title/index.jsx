import ColorComponents from 'components/atoms/ColorComponent';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';

function Title() {
  const [grey, setGrey] = useState('#DEDFE3');

  return (
    <AppearanceWrapper>
      <InputWrapper>
        <StickyButtonLabel>Text</StickyButtonLabel>
        <Wrapper>
          <Input className="input-field" type="text" placeholder="Donate" />
        </Wrapper>
      </InputWrapper>
      <ColorWrapper>
        <ColorContainer>
          <MessageLabel className="border-color">Color</MessageLabel>
          <ColorComponents type="color" value={grey} onChange={(e) => setGrey(e.target.value)} />
        </ColorContainer>
      </ColorWrapper>
    </AppearanceWrapper>
  );
}

export default Title;

const AppearanceWrapper = styled.div`
  .input-field {
    width: 30.6rem;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 2.4rem;
  }
  .checkbox {
    margin: 0 0 3.9rem 22.5rem;
  }

  .title {
    padding-left: 7.2rem;
  }
  .border-radius {
    margin-left: 11rem;
  }
  .border-label {
    width: 15rem;
  }
  .border-color {
    /* width: 9.9rem; */
    margin-left: 17.9rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1.7rem;
`;

const MessageLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  display: flex;
  align-items: center;
  height: 4.4rem;
  white-space: nowrap;
`;

const Wrapper = styled.div``;

const ColorContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-bottom: 3.2rem;
  .color-label {
    padding-top: 1rem;
    width: 8rem;
    margin-left: 13rem;
  }
  .background-label {
    width: 14.1rem;
    margin-left: 6.9rem;
  }
`;

const ColorWrapper = styled.div``;

const StickyButtonLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  display: flex;
  align-items: center;
  height: 4.4rem;
  margin-left: 18.5rem;
`;
