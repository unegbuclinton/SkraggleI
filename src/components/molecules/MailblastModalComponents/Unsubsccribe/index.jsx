import Button from "components/atoms/Button/Button";
import React from "react";
import { COLORS } from "constants/colors";
import styled from "styled-components";
import { FONTSIZES } from "constants/font-spec";
import { FONTWEIGHTS } from "constants/font-spec";
import { useNavigate } from "react-router-dom";

function Unsubscribe({ onCloseModal }) {

  let navigate = useNavigate();

  const Switch = () => {
    navigate('SubscriptionUpdated/')
  };
  return (
    <UnsubscribeWrapper>
      <p> We are sad to see you go :(</p>
      <div className="btn-wrapper">
        <Button invert auth className="send-cancel-btn" onClick={onCloseModal}>
          Nevermind
        </Button>
        <Button auth className="send-save-btn" onClick={Switch}>
          Confirm
        </Button>
      </div>
    </UnsubscribeWrapper>
  );
}

export default Unsubscribe;

const UnsubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.2rem 0 5.1rem 0;

  p {
    margin-bottom: 3.2rem;
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
  }

  .send-cancel-btn {
    width: 10.7rem;
    height: 5.1rem;
    color: ${COLORS["gray-500"]};
  }
  .send-save-btn {
    width: 10.7rem;
    height: 5.1rem;
  }
`;
