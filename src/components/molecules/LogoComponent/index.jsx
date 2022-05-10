import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconSkraggleLogo, DPIconSkraggleLogoLight } from 'icons';
import React from 'react';
import styled from 'styled-components';

const LogoComponent = ({ light }) => {
  return (
    <LogoWrapper light={light}>
      {light ? <DPIconSkraggleLogoLight /> : <DPIconSkraggleLogo />}
      <div>
        <h2 className="logo__header">Skraggle</h2>
        <p className="logo__text">Fundraise</p>
      </div>
    </LogoWrapper>
  );
};

export default LogoComponent;

const LogoWrapper = styled.div`
  display: flex;
  gap: 1.582rem;
  font-weight: ${FONTWEIGHTS.bold};

  .logo {
    &__header {
      color: ${({ light }) => (light ? `${COLORS.white}` : `${COLORS.deepPurple}`)};
      font-size: ${FONTSIZES['logo-large']};
      line-height: 4rem;
    }

    &__text {
      color: ${COLORS.pink};
      font-size: ${FONTSIZES.small};
      margin-top: -0.5rem;
    }
  }
`;
