import React from 'react';
import { ButtonWrapper } from './styles';

const Button = ({ children, className, pill, type, large, alias, ...rest }) => {
  return (
    <ButtonWrapper alias={alias} pill={pill} className={className} type={type} {...rest}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
