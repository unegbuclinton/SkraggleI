import Card from 'components/atoms/Card';
import React from 'react';
import styled from 'styled-components';
import PromoCodeDropdown from '../DropdownComponents/PromoCodeDropdown';

function PromoCodeModalComponent({ onClose }) {
  return (
    <ModalWrapper>
      <PromoCodeDropdown onClose={onClose} />
    </ModalWrapper>
  );
}

export default PromoCodeModalComponent;

export const ModalWrapper = styled(Card)`
  padding: 0rem 2.4rem 2.4rem 2.4rem;
`;
