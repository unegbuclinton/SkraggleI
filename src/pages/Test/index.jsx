import React from "react";
import styled from "styled-components";
import Checkbox from "components/atoms/CheckBox";

const Test = () => {
  return (
    <Wrapper>
      <Checkbox pink/>
    </Wrapper>
  );
};

export default Test;

const Wrapper = styled.div`
  /* .checkbox {
    width: 2rem;
    height: 2rem;
  } */
`;
