// import Button from 'components/atoms/Button/Button';
import Checkbox from 'components/atoms/CheckBox';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function Appeearance() {
  return (
    <AppearanceWrapper>
      <AppearanceCheckbox>
        <Checkbox label="Show Label" className="label-checkbox" pink />
      </AppearanceCheckbox>
      <div className="content-align">
        <AppearanceContentContainer>
          <AppearanceContainer>
            <AppearanceLabel>Label color</AppearanceLabel>
            <Input
              className="appearance-label__input"
              placeholder="#54ce4"
              containerClass="container-class"
            />
          </AppearanceContainer>
          <span className="input-label__color"></span>
        </AppearanceContentContainer>

        <AppearanceContentContainer>
          <AppearanceContainer>
            <AppearanceLabel>Progress bar color</AppearanceLabel>
            <Input
              className="appearance-progress__input"
              containerClass="container-class"
              placeholder="#543ee"
            />
          </AppearanceContainer>
          <span className="input-progress__color"></span>
        </AppearanceContentContainer>

        <AppearanceContentContainer>
          <AppearanceContainer>
            <AppearanceLabel>Background color</AppearanceLabel>
            <Input
              className="appearance-background__input"
              containerClass="container-class"
              placeholder="#5454d"
            />
          </AppearanceContainer>
          <span className="input-background__color"></span>
        </AppearanceContentContainer>
      </div>
      <AppearanceCheckbox>
        <Checkbox label="Show animation" className="animation-checkbox" pink />
      </AppearanceCheckbox>
    </AppearanceWrapper>
  );
}

export default Appeearance;

export const AppearanceWrapper = styled.div`
  .content-align {
    display: flex;
    flex-direction: column;
    padding-left: 6.5rem;
  }
`;

export const AppearanceContentContainer = styled.div`
  position: relative;

  .container-class {
    width: fit-content;
  }
  .input-label__color {
    position: absolute;
    top: 1rem;
    left: 16.5rem;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    background-color: blue;
  }

  .input-progress__color {
    position: absolute;
    top: 1rem;
    left: 17rem;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    background-color: blue;
  }

  .input-background__color {
    position: absolute;
    top: 1rem;
    left: 16.5rem;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    background-color: blue;
  }
`;
export const AppearanceContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;

  .appearance-label__input {
    width: 13.4rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    padding-left: 5rem;
    margin-left: 5.5rem;
  }
  .appearance-progress__input {
    width: 13.4rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    padding-left: 5rem;
  }
  .appearance-background__input {
    width: 13.4rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    padding-left: 5rem;
  }
`;

export const AppearanceLabel = styled.p`
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;

export const AppearanceCheckbox = styled.div`
  display: flex;
  justify-content: center;

  .animation-checkbox {
    margin-left: 2rem;
    margin-bottom: 3.2rem;
  }

  .label-checkbox {
    margin-bottom: 2.4rem;
  }
`;
