import Button from 'components/atoms/Button/Button';
import { COLORS } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

function MailButton({ btn }) {
  return (
    <ButtonWrapper>
      {btn.map(({ title, index }) => (
        <Button key={index} className="mail-btn" index={index} pill>
          {title}
        </Button>
      ))}
    </ButtonWrapper>
  );
}

export default MailButton;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .mail-btn {
    width: 10.6rem;
    height: 3rem;
    background: ${COLORS['grey-400.2']};
    color: ${COLORS['grey-400']};
  }
`;
