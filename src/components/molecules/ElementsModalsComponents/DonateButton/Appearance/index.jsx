import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';

function DonateAppearance() {
  const [white, setWhite] = useState('#FFFFFF');
  const [blue, setBlue] = useState('#477BE0');
  const [whitez, setWhitez] = useState('#FFFFFF');
  const [black, setBlack] = useState('#000000');

  return (
    <DonateAppearanceWrapper>
      <DonateAppearanceLabel>Label</DonateAppearanceLabel>
      <Input type="text" className="input-field" placeholder="Donate" />
      <ColorsWrapper>
        {/* {Colors.map((item, idx) => (
          <ColorComponents
            key={idx}
            style={{ backgroundColor: `${item.color}` }}
            colorCode={item.colorCode}
          />
        ))} */}
        <ColorComponents type="color" value={white} onChange={(e) => setWhite(e.target.value)} />
        <ColorComponents type="color" value={blue} onChange={(e) => setBlue(e.target.value)} />
        <ColorComponents type="color" value={whitez} onChange={(e) => setWhitez(e.target.value)} />
        <ColorComponents type="color" value={black} onChange={(e) => setBlack(e.target.value)} />
      </ColorsWrapper>
      <CheckboxContainer>
        <Checkbox />
        <CheckboxLabel>Show shadow</CheckboxLabel>
      </CheckboxContainer>
    </DonateAppearanceWrapper>
  );
}

export default DonateAppearance;

const DonateAppearanceWrapper = styled.div`
  padding: 0 2.4rem 0 2.4rem;
  .input-field {
    width: 100%;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 3.2rem;
  }
`;

const DonateAppearanceLabel = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-500']};
  margin-bottom: 0.8rem;
  cursor: default;
`;

const ColorsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CheckboxLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS.black};
`;

const CheckboxContainer = styled.div`
  display: flex;
  gap: 1.1rem;
  margin: 3rem 0 1.3rem 0;
`;
