import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';

function Appearance() {
  const [white, setWhite] = useState('#FFFFFF');
  const [blue, setBlue] = useState('#477BE0');
  const [whitez, setWhitez] = useState('#FFFFFF');
  const [black, setBlack] = useState('#000000');
  return (
    <AppearanceWrapper>
      <ColorWrapper>
        <ColorContainer>
          <StickyButtonLabel className="color-label">Label color</StickyButtonLabel>
          <ColorComponents type="color" value={white} onChange={(e) => setWhite(e.target.value)} />
        </ColorContainer>
        <ColorContainer>
          <StickyButtonLabel className="color-label">Button color</StickyButtonLabel>
          <ColorComponents type="color" value={blue} onChange={(e) => setBlue(e.target.value)} />
        </ColorContainer>
        <ColorContainer>
          <StickyButtonLabel className="color-label">Border color</StickyButtonLabel>
          <ColorComponents type="color" value={black} onChange={(e) => setBlack(e.target.value)} />
        </ColorContainer>
        <ColorContainer>
          <StickyButtonLabel className="color-label">Icon color</StickyButtonLabel>
          <ColorComponents
            type="color"
            value={whitez}
            onChange={(e) => setWhitez(e.target.value)}
          />
        </ColorContainer>
      </ColorWrapper>
      <CheckBoxWrapper className="checkbox">
        <Checkbox pink />
        <CheckBoxLabel>Show shadow</CheckBoxLabel>
      </CheckBoxWrapper>
    </AppearanceWrapper>
  );
}

export default Appearance;

const AppearanceWrapper = styled.div`
  .input-field {
    width: 30.6rem;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 2.7rem;
  }
`;

const StickyButtonLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  display: flex;
  align-items: center;
  height: 4.4rem;
`;

const ColorContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-bottom: 1.6rem;
  .color-label {
    padding-top: 1rem;
    width: 14rem;
    display: flex;
    justify-content: flex-end;
  }
`;

const ColorWrapper = styled.div`
  padding-left: 7rem;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  margin: 1.8rem 0 0 22.8rem;
`;

const CheckBoxLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS.black};
`;
