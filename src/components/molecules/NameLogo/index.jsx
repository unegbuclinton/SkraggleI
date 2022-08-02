import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled, { css } from 'styled-components';

function NameLogo({ text, dashboardLogo }) {
  const getFirstLetter = (str) => {
    const firstLetter = str
      .split(' ')
      .map((word) => word[0])
      .join('');

    return firstLetter;
  };

  return (
    <NameLogoWrapper dashboardLogo={dashboardLogo}>
      <div className="logo"> {getFirstLetter(text)}</div>
      <p className="logo-text"> {text}</p>
    </NameLogoWrapper>
  );
}

export default NameLogo;

const NameLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    font-size: ${FONTSIZES.xsmall};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS['grey-500']};
    background-color: ${COLORS['orange-100']};
    border-radius: 50%;
    ${({ dashboardLogo }) =>
      dashboardLogo &&
      css`
     color: ${COLORS.white};
    background-color: ${COLORS.deepPurple};
      }
    `};
  }

  .logo-text {
    font-size: ${FONTSIZES.xsmall};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS['grey-500']};
  }
`;
