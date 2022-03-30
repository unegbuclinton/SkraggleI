import React from "react";
import { COLORS } from "constants/colors";
import styled from "styled-components";
import Button from "components/atoms/Button/Button";

function SendMail() {
  return (
    <MailWrapper>
      <div className="btn-wrapper">
        <Button invert auth className="send-cancel-btn">
          Cancel
        </Button>
        <Button auth className="send-save-btn">
          Save
        </Button>
      </div>
    </MailWrapper>
  );
}

export default SendMail;

const MailWrapper = styled.div`
  padding: 6.2rem 16.2rem 7.4rem 16rem;

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
    width: 20.5rem;
    height: 5.1rem;
  }
`;
