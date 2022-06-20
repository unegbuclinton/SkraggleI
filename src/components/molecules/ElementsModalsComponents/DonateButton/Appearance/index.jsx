import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function DonateAppearance() {
  const Colors = [
    {
      color: `${COLORS.white}`,
      colorCode: '#FFFFFF'
    },
    {
      color: `${COLORS['navy-blue']}`,
      colorCode: '#477BE0'
    },
    {
      color: `${COLORS.white}`,
      colorCode: '#FFFFFF'
    },
    {
      color: `${COLORS.black}`,
      colorCode: '#000000'
    }
  ];
  return (
    <DonateAppearanceWrapper>
      <DonateAppearanceLabel>Label</DonateAppearanceLabel>
      <Input type="text" className="input-field" placeholder="Donate" />
      <ColorsWrapper>
        {Colors.map((item, idx) => (
          <ColorComponents
            key={idx}
            style={{ backgroundColor: `${item.color}` }}
            colorCode={item.colorCode}
          />
        ))}
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
