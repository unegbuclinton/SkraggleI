import React from "react";

import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES } from "constants/font-spec";

const TextArea = ({className, maxLength, ...rest}) => {
  const [textAreaCount, ChangeTextAreaCount] = React.useState(0);
  const recalculate = (e) => {
    ChangeTextAreaCount(e.target.value.length);
  };

  return (
    <TextContainer>
      <TextAreaInput
        type="text"
        rows={5}
        maxLength={maxLength}
        onChange={recalculate}
        className={className}
        placeholder="Write your message here"
      />
      <p className="count_number">{textAreaCount}/120</p>
    </TextContainer>
  );
};

export default TextArea;

export const TextContainer = styled.div`
  display: flex;
  border: 1px solid ${COLORS["gray-500"]};
  border-radius: 0.5rem;
  .count_number {
    font-size: ${FONTSIZES.small};
    margin-right: 1.6rem;
    margin-bottom: 1.6rem;
    align-self: flex-end;
  }
`;

export const TextAreaInput = styled.textarea`
  width: 100%;
  border: none;
  padding-top: 2.3rem;
  padding-left: 2.3rem;
  height: 14.4rem;
  outline: none;
  resize: none;
`;
