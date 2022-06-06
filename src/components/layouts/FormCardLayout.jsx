import Card from 'components/atoms/Card';
import { DPIconSkraggleHeader } from 'icons';
import React from 'react';
import styled from 'styled-components';

function FormCardLayout({ children }) {
  return (
    <FormCardContainer>
      <DPIconSkraggleHeader />
      <Card>{children}</Card>
    </FormCardContainer>
  );
}

export default FormCardLayout;

const FormCardContainer = styled.div`
  width: 37.954rem;
`;
