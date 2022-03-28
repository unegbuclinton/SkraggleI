import React from "react";
import Button from "components/atoms/Button/Button";
import { WebsiteContainer, WebsiteHeading, WebsiteWrapper } from "./styles";

function Websites() {
  return (
    <WebsiteWrapper>
      <WebsiteHeading>
        <h1 className="heading">Websites</h1>
        <Button className="heading-btn">Edit</Button>
      </WebsiteHeading>
      <WebsiteContainer>
        <h2 className="title">WEBSITE</h2>
        <p className="info web">-</p>
      </WebsiteContainer>
      <WebsiteContainer>
        <h2 className="title">TWITTER</h2>
        <p className="info twitter">-</p>
      </WebsiteContainer>
      <WebsiteContainer>
        <h2 className="title">FACEBOOK</h2>
        <p className="info facebook">-</p>
      </WebsiteContainer>
      <WebsiteContainer>
        <h2 className="title">YOUTUBE</h2>
        <p className="info youtube">-</p>
      </WebsiteContainer>
      <WebsiteContainer>
        <h2 className="title">LINKEDIN</h2>
        <p className="info linkdin">-</p>
      </WebsiteContainer>
      <WebsiteContainer>
        <h2 className="title">INSTAGRAM</h2>
        <p className="info instagram">-</p>
      </WebsiteContainer>
      <WebsiteContainer>
        <h2 className="title">OTHER WEBSITES</h2>
        <p className="info other-web">-</p>
      </WebsiteContainer>
    </WebsiteWrapper>
  );
}

export default Websites;
