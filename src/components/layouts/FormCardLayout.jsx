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
<<<<<<< HEAD
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-bottom: 2.5rem;
=======
  max-width: 37.954rem;
  width: 100%;
>>>>>>> f349565b0209c87266bed6c20ead0652dd764fcd

  .header-logo {
    width: 100%;
  }
`;
