import Button from "components/atoms/Button/Button";
import React from "react";
import {
  Container,
  ContentHeading,
  EventFormContainer,
  InputField,
  WordingContainer,
  WordingHeader,
  WordingWrapper,
} from "./styles";
function EventInformation() {
  return (
    <WordingWrapper>
      <WordingHeader>
        <h1 className="heading">Event information</h1>
      </WordingHeader>
      <ContentHeading>
        <h2 className="content">ORIGINAL</h2>
        <h2 className="content">CUSTOM</h2>
      </ContentHeading>

      <WordingContainer>
        <p className="left-word">Lorem Ipsam</p>
        <p className="right-word">Click to set custom text</p>
      </WordingContainer>

      <EventFormContainer>
        <p className="left-word">Lorem Ipsam</p>
        <Container>
          <InputField />
          <div className="button-container">
            <Button className="btn-save">Save</Button>
            <Button className="btn-cancel">Cancel</Button>
          </div>
        </Container>
      </EventFormContainer>
      <WordingContainer>
        <p className="left-word">Lorem Ipsam</p>
        <p className="right-word">Click to set custom text</p>
      </WordingContainer>
      <WordingContainer>
        <p className="left-word">Lorem Ipsam</p>
        <p className="right-word">Click to set custom text</p>
      </WordingContainer>
      <WordingContainer>
        <p className="left-word">Lorem Ipsam</p>
        <p className="right-word">Click to set custom text</p>
      </WordingContainer>
      <WordingContainer>
        <p className="left-word">Lorem Ipsam</p>
        <p className="right-word">Click to set custom text</p>
      </WordingContainer>
    </WordingWrapper>
  );
}

export default EventInformation;
