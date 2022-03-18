import Card from "components/atoms/Card/Card";
import LogoComponent from "components/molecules/LogoComponent";
import { COLORS } from "constants/colors";
import backgroundLeft from "icons/svgs/auth-background-left.svg";
import backgroundRight from "icons/svgs/auth-background-right.svg";
import React from "react";
import styled from "styled-components";

const AuthLayout = ({ children }) => {
  return (
    <AuthWrapper>
      <LogoComponent />
      <Card>{children}</Card>
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
  row-gap: 11.734rem;
  align-items: center;
  background-image: url(${backgroundLeft}), url(${backgroundRight});
  background-position: bottom left, bottom right;
  background-repeat: no-repeat;
`;

export default AuthLayout;
