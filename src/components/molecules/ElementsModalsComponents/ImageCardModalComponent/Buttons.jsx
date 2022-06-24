import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import SelectDropDown from 'components/atoms/GenericDropdown';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';

function Buttons() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [buttonTextColor, setButtonTextColor] = useState('#2797FF');
  return (
    <ButtonsWrapper>
      <ButtonsFieldWrapper>
        <ButtonsLabel>Button text</ButtonsLabel>
        <SelectDropDown className="button-dropdown" placeholder="Match checkout setting" />
      </ButtonsFieldWrapper>

      <ButtonsFieldWrapper>
        <ButtonsLabel></ButtonsLabel>
        <Checkbox pink className="button-checkbox" label="Show amount of button" />
      </ButtonsFieldWrapper>

      <ButtonsFieldWrapper>
        <ButtonsLabel>Button text color</ButtonsLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <ColorComponents
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
            />
          </ColorContainer>
        </ColorContainerWrapper>
      </ButtonsFieldWrapper>

      <ButtonsFieldWrapper>
        <ButtonsLabel>Background color</ButtonsLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <ColorComponents
              type="color"
              value={buttonTextColor}
              onChange={(e) => setButtonTextColor(e.target.value)}
            />
          </ColorContainer>
        </ColorContainerWrapper>
      </ButtonsFieldWrapper>
    </ButtonsWrapper>
  );
}

export default Buttons;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 3.3rem;
`;

export const ButtonsFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;
  margin-left: 6.4rem;
  gap: 0.8rem;

  font-size: ${FONTSIZES.small};

  .behavior__campaign {
    max-width: 31.2rem;
    width: 100%;
    background-color: ${COLORS.torquoise};
  }

  .campaign-image {
    max-width: 20rem;
    width: 100%;
    height: 10.4rem;
  }

  .image-container {
    max-width: 20rem;
    height: 10.4rem;
  }
  .button-dropdown {
    max-width: 31.2rem;
    width: 100%;
  }
`;

export const ButtonsLabel = styled.label`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;

export const ColorContainerWrapper = styled.div`
  width: 100%;
  max-width: 13.4rem;
`;

export const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
