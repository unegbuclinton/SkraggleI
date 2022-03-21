<<<<<<< HEAD
import LogoComponent from "components/molecules/LogoComponent";
import { COLORS } from "constants/colors";
import backgroundLeft from "icons/svgs/auth-background-left.svg";
import backgroundRight from "icons/svgs/auth-background-right.svg";
import React from "react";
import styled from "styled-components";
=======
import LogoComponent from 'components/molecules/LogoComponent';
import { COLORS } from 'constants/colors';
import backgroundLeft from 'icons/svgs/auth-background-left.svg';
import backgroundRight from 'icons/svgs/auth-background-right.svg';
import React from 'react';
import styled from 'styled-components';
>>>>>>> 28b4c5edcd686217c9596ad515e6c8393450377d

const AuthLayout = ({ children }) => {
  return (
    <AuthWrapper>
      <LogoComponent />
      {children}
    </AuthWrapper>
  );
};

const AuthWrapper = styled.div`
  background-color: ${COLORS.torquoise};
  min-height: 100vh;
  width: 100%;
  padding: 9.415rem 0 4.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundLeft}), url(${backgroundRight});
  background-position: bottom left, bottom right;
  background-repeat: no-repeat;
`;

export default AuthLayout;
