import React from 'react';
import { ButtonWrapper } from './styles';

const Button = ({ children, className, pill, ...rest }) => {
  return (
    <ButtonWrapper pill={pill} className={className}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;


