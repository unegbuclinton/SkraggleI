import React from "react";
import styled from "styled-components";
import MailContent from "pages/MailBlast/Content";
const Test = () => {
  return (
    <Wrapper>
      <MailContent />
    </Wrapper>
  );
};

export default Test;

const Wrapper = styled.div`
  .checkbox {
    width: 2rem;
    height: 2rem;
  }
`;
