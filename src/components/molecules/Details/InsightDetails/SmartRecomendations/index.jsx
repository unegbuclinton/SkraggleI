import { DPIconThankYou } from "icons";
import React from "react";
import {
  ContentsWrapper,
  InfoContainer,
  InfoWrapper,
  RecomendationHeading,
  ReconmendationWrapper,
} from "./styles";

function SmartRecomendation() {
  return (
    <ReconmendationWrapper>
      <RecomendationHeading>
        <h1 className="heading">Smart Recomendation</h1>
      </RecomendationHeading>
      <ContentsWrapper>
        <InfoWrapper>
          <DPIconThankYou />

          <InfoContainer>
            <h2 className="content-heading">SMART ASK</h2>
            <p className="content-info">
              Troy is most likely to donate between{" "}
              <span className="content-info__digit">$400 - $550</span>. We
              recommend asking them for{" "}
              <span className="content-info__digit">$470</span>{" "}
            </p>
          </InfoContainer>
        </InfoWrapper>

        <InfoWrapper>
          <DPIconThankYou />
          <InfoContainer>
            <h2 className="content-heading">TIME OF YEAR</h2>
            <p className="content-info">
              We don’t have enough data just yet to provide a recommendation for
              this.{" "}
            </p>
          </InfoContainer>
        </InfoWrapper>

        <InfoWrapper>
          <DPIconThankYou />
          <InfoContainer>
            <h2 className="content-heading">BEST WAY TO REACH OUT</h2>
            <p className="content-info">
              Based on previous interactions, we recommend reaching out to Troy
              by Mail
            </p>
          </InfoContainer>
        </InfoWrapper>

        <InfoWrapper>
          <DPIconThankYou />
          <InfoContainer>
            <h2 className="content-heading">CAMPAIGN RECOMMENDATIONS</h2>
            <p className="content-info">
              We don’t have enough data just yet to provide a recommendation for
              this.
            </p>
          </InfoContainer>
        </InfoWrapper>
      </ContentsWrapper>
    </ReconmendationWrapper>
  );
}

export default SmartRecomendation;
