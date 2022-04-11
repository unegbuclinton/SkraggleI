import Button from "components/atoms/Button/Button";
import React from "react";
import styled from "styled-components";

function NewsTellerAction({ShowSendBlast}) {
  return (
    <ActionWrapper>
      <Button invert className="action-btn">
        Edit
      </Button>
      <Button className="action-btn" onClick={ShowSendBlast}>Send</Button>
    </ActionWrapper>
  );
}

export default NewsTellerAction; 

const ActionWrapper = styled.div`
  display: flex;
  gap: 1.6rem;

  .action-btn {
    width: 7.8rem;
    height: 4.8rem;
  }
`;
