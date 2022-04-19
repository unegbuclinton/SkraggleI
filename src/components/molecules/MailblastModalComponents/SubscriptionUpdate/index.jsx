import Checkbox from "components/atoms/CheckBox";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import React from "react";
import styled from "styled-components";

function SubscriptionUpdate() {
  return (
    <SubscriptionUpdateWrapper>
      <div className="status-alert">
        <Checkbox inverted checked={true} radial /> Subscription Status Updated.
      </div>
      <p> Subscription Status Updated.</p>
    </SubscriptionUpdateWrapper>
  );
}

export default SubscriptionUpdate;

const SubscriptionUpdateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .status-alert {
    position: absolute;
    top: -5.5rem;
    right: -20rem;
    width: 28.6rem;
    height: 6.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    background: ${COLORS["light-pink"]};
    color: ${COLORS.deepPurple};
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    border-radius: 0.5rem;
  }
  p {
    color: ${COLORS.deepPurple};
    font-weight: ${FONTWEIGHTS.medium};
    font-size: ${FONTSIZES.xxlarge};
  }
`;
