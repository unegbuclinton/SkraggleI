import React from "react";

import {
  ContentHeading,
  WordingContainer,
  WordingHeader,
  WordingWrapper,
} from "./styles";

function PaymentInformation() {
  return (
    <WordingWrapper>
      <WordingHeader>
        <h1 className="heading">Payment information</h1>
      </WordingHeader>
      <ContentHeading>
        <h2 className="content">ORIGINAL</h2>
        <h2 className="content">CUSTOM</h2>
      </ContentHeading>

      <WordingContainer>
        <p className="left-word">Lorem Ipsam</p>
        <p className="right-word text">Click to set custom text</p>
      </WordingContainer>
      <WordingContainer>
        <p className="left-word">Lorem Ipsam</p>
        <p className="right-word text">Click to set custom text</p>
      </WordingContainer>
      <WordingContainer>
        <p className="left-word">Lorem Ipsam</p>
        <p className="right-word text">Click to set custom text</p>
      </WordingContainer>
      <WordingContainer>
        <p className="left-word">Lorem Ipsam</p>
        <p className="right-word text">Click to set custom text</p>
      </WordingContainer>
      <WordingContainer>
        <p className="left-word">Lorem Ipsam</p>
        <p className="right-word text">Click to set custom text</p>
      </WordingContainer>
    </WordingWrapper>
  );
}

export default PaymentInformation;
