import LogoComponent from 'components/molecules/LogoComponent';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import backgroundLeft from 'icons/svgs/auth-background-left.svg';
import backgroundRight from 'icons/svgs/auth-background-right.svg';
import React from 'react';
import styled from 'styled-components';

const AuthLayout = ({ children }) => {
  return (
    <AuthWrapper>
      <LogoComponent />
      <ContentWrapper>{children}</ContentWrapper>
    </AuthWrapper>
  );
};

const AuthWrapper = styled.div`
  background-color: ${COLORS.torquoise};
  height: 100vh;
  width: 100%;
  padding: 9.415rem 0 4.6rem;
  display: flex;
  flex-direction: column;
  row-gap: 11.734rem;
  align-items: center;
  background-image: url(${backgroundLeft}), url(${backgroundRight});
  background-position: bottom left, bottom right;
  background-repeat: no-repeat;

  .logo-wrapper {
    display: flex;
    gap: 1.582rem;
    font-weight: ${FONTWEIGHTS.bold};

    &__header {
      color: ${COLORS.deepPurple};
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

const ContentWrapper = styled.div`
  background-color: ${COLORS.white};
  padding: 3.439rem 4.5rem 4rem;
`;

export default AuthLayout;
