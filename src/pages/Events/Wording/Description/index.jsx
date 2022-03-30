import React from "react";
import {
  ContentHeading,
  WordingContainer,
  WordingHeader,
  WordingWrapper,
} from "./styles";

function Description() {
  return (
    <WordingWrapper>
      <WordingHeader>
        <h1 className="heading">Description</h1>
      </WordingHeader>
      <ContentHeading>
        <h2 className="content">ORIGINAL</h2>
        <h2 className="content">CUSTOM</h2>
      </ContentHeading>

      <WordingContainer>
        <p className="left-word">Required</p>
        <p className="right-word">Click to set custom text</p>
      </WordingContainer>
    </WordingWrapper>
  );
}

export default Description;
