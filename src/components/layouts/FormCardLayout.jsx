import Card from 'components/atoms/Card';
import { DPIconSkraggleHeader } from 'icons';
import React from 'react';
import styled from 'styled-components';

function FormCardLayout({ children }) {
  return (
    <FormCardContainer>
      <DPIconSkraggleHeader className="header-logo" />
      <Card>{children}</Card>
    </FormCardContainer>
  );
}

export default FormCardLayout;

const FormCardContainer = styled.div`
  max-width: 37.954rem;
  width: 100%;

  .header-logo {
    width: 100%;
  }
`;
