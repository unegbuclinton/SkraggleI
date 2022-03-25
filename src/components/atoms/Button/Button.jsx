import React from "react";
import { ButtonWrapper } from "./styles";

const Button = ({ children, className, pill, type , large, ...rest }) => {
  return (
    <ButtonWrapper pill={pill} className={className} type={type} {...rest}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
