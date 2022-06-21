import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function Appearance() {
  const Colors = [
    {
      label: 'Text color',
      color: `${COLORS.white}`,
      colorCode: '#FFFFFF'
    },
    {
      label: 'background color',
      color: `${COLORS['navy-blue']}`,
      colorCode: '#477BE0'
    }
  ];

  const Colorz = [
    {
      label: 'Border color',
      color: `${COLORS.black}`,
      colorCode: '#000000'
    },
    {
      label: 'Icon color',
      color: `${COLORS.white}`,
      colorCode: '#FFFFFF'
    }
  ];
  return (
    <AppearanceWrapper>
      <ColorWrapper>
        {Colors.map((item, idx) => (
          <ColorContainer key={idx}>
            <StickyButtonLabel className="color-label">{item.label}</StickyButtonLabel>
            <ColorComponents
              style={{ backgroundColor: `${item.color}` }}
              colorCode={item.colorCode}
            />
          </ColorContainer>
        ))}
        {Colorz.map((item, idx) => (
          <ColorContainer key={idx}>
            <StickyButtonLabel className="color-label">{item.label}</StickyButtonLabel>
            <ColorComponents
              style={{ backgroundColor: `${item.color}` }}
              colorCode={item.colorCode}
            />
          </ColorContainer>
        ))}
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
