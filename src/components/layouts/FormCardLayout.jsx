import Card from 'components/atoms/Card';
import { DPIconSkraggleHeader } from 'icons';
import React from 'react';
import styled from 'styled-components';

function FormCardLayout({ children }) {
  return (
    <FormCardContainer>
      {/* <div className="wrapper-class"> */}
      <DPIconSkraggleHeader className="header-logo" />
      <Card>{children}</Card>
      {/* </div> */}
    </FormCardContainer>
  );
}

export default FormCardLayout;

const FormCardContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  /* padding-bottom: 2.5rem; */
  flex: 0.35;
  .wrapper-class {
    height: 100%;
  }

  .header-logo {
    width: 100%;
  }
`;
