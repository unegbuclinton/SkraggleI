import React from "react";
import { HeaderWrapper } from "./styles";

function HeaderModal({ children }) {
  return (
    <HeaderWrapper>
      <p className="header-text">{children}</p>
    </HeaderWrapper>
  );
}

export default HeaderModal;
