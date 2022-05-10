import { DPIconMark, DPIconSkraggleEyeClose } from 'icons';
import React from 'react';
import { DetailLabel, DetailsSubHeading, EventWrapper, IconWrapper } from './styles';

function DisplayOptions() {
  return (
    <div>
      <DetailsSubHeading className="event-heading">Display options</DetailsSubHeading>
      <EventWrapper>
        <IconWrapper>
          <div className="icon-container">
            <DPIconMark />
            <DetailLabel className="icon-label">Mobile</DetailLabel>
          </div>

          <div className="icon-container">
            <DPIconSkraggleEyeClose />
            <DetailLabel className="icon-label">Private</DetailLabel>
          </div>
        </IconWrapper>
      </EventWrapper>
    </div>
  );
}

export default DisplayOptions;
