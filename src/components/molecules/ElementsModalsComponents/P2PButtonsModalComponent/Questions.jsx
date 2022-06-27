import SelectDropDown from 'components/atoms/GenericDropdown';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function Questions() {
  return (
    <QuestionsWrapper>
      <QuestionsFieldWrapper>
        <SelectDropDown className="questions-dropdown" placeholder="Find or create new question" />
      </QuestionsFieldWrapper>
    </QuestionsWrapper>
  );
}

export default Questions;

export const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 2.4rem 2.4rem 2.4rem;

  .radio-field {
    align-items: baseline;
    display: flex;
    margin-left: 6.4rem;
    margin-bottom: 2.4rem;
  }
`;

export const QuestionsFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
  font-size: ${FONTSIZES.small};
  gap: 0.8rem;

  .questions-dropdown {
    width: 100%;
  }
`;

export const QuestionsLabel = styled.label`
  display: flex;
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;
