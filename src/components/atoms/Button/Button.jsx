import React from "react";
import { ButtonWrapper } from "./styles";

const Button = ({ children, className, pill, large, ...rest }) => {
  return (
    <ButtonWrapper pill={pill} className={className} {...rest}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
