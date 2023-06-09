import { DPIconThankYou } from 'icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { capitalizeFirstLowercaseRest } from 'utilities/helpers';
import {
  ContentsWrapper,
  InfoContainer,
  InfoWrapper,
  RecomendationHeading,
  ReconmendationWrapper
} from './styles';

function SmartRecomendation() {
  const { eachContact, recommendation } = useSelector((state) => state.contact);

  const { first_name, last_name } = eachContact;

  const recommendedData = recommendation?.smart_ask;

  const fullName = `${first_name} ${last_name}`;

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
              {` ${fullName} is most likely to donate between `}
              <span className="content-info__digit">{`$${recommendedData?.maximum} - $${recommendedData?.minimum}`}</span>
              . We recommend asking them for
              <span className="content-info__digit"> ${recommendedData?.recommended}</span>
            </p>
          </InfoContainer>
        </InfoWrapper>

        <InfoWrapper>
          <DPIconThankYou />
          <InfoContainer>
            <h2 className="content-heading">TIME OF YEAR</h2>
            <p className="content-info">{recommendedData?.time_of_year}</p>
          </InfoContainer>
        </InfoWrapper>

        <InfoWrapper>
          <DPIconThankYou />
          <InfoContainer>
            <h2 className="content-heading">BEST WAY TO REACH OUT</h2>
            <p className="content-info">
              {capitalizeFirstLowercaseRest(recommendation?.best_way_to_reach_out)}
            </p>
          </InfoContainer>
        </InfoWrapper>

        <InfoWrapper>
          <DPIconThankYou />
          <InfoContainer>
            <h2 className="content-heading">CAMPAIGN RECOMMENDATIONS</h2>
            <p className="content-info">
              We don’t have enough data just yet to provide a recommendation for this.
            </p>
          </InfoContainer>
        </InfoWrapper>
      </ContentsWrapper>
    </ReconmendationWrapper>
  );
}

export default SmartRecomendation;
