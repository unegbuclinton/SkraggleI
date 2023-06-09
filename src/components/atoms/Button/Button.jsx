import React from 'react';
import { ButtonWrapper } from './styles';

const Button = ({ children, className, pill, type, alias, disabled, loading, ...rest }) => {
  return (
    <ButtonWrapper
      disabled={disabled || loading}
      alias={alias}
      pill={pill}
      className={className}
      type={type}
      {...rest}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
