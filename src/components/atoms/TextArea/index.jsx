import { COLORS } from 'constants/colors';
import { FONTSIZES } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

const TextArea = ({ className, maxLength, onChange }) => {
  // const [textAreaCount, ChangeTextAreaCount] = React.useState(0);
  // const recalculate = (e) => {
  //   ChangeTextAreaCount(e.target.value.length);
  // };

  return (
    <TextContainer>
      <TextAreaInput
        type="text"
        rows={5}
        maxLength={maxLength}
        onChange={onChange}
        className={className}
        placeholder="Write your message here"
      />
      {/* <p className="count_number">{textAreaCount}/120</p> */}
    </TextContainer>
  );
};

export default TextArea;

export const TextContainer = styled.div`
  display: flex;
  position: relative;
  border: 1px solid ${COLORS['gray-500']};
  border-radius: 0.5rem;
  .count_number {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: ${FONTSIZES.small};
    margin-right: 1.6rem;
    margin-bottom: 1.6rem;
    align-self: flex-end;
  }
`;

export const TextAreaInput = styled.textarea`
  width: 100%;
  word-break: break-all;
  border: none;
  padding: 2.3rem 2.3rem 0;
  height: 14.4rem;
  outline: none;
  resize: none;
`;
