import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { messageBarActions } from 'features/elements/elementReducer';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

function Appearance() {
  const { messageBar } = useSelector((state) => state.elementIframes);
  const { title, content, backgroundColor, textColor } = messageBar;
  const dispatch = useDispatch();

  const [messageBarProperties, setMessageBarProperties] = useState(messageBar);

  const handleChange = (value, key) => {
    setMessageBarProperties({ ...messageBarProperties, [key]: value });
  };

  useEffect(() => {
    dispatch(messageBarActions(messageBarProperties));
  }, [messageBarProperties]);

  return (
    <AppearanceWrapper>
      <InputWrapper className="title">
        <MessageLabel>Title</MessageLabel>
        <Wrapper>
          <Input
            className="input-field"
            type="text"
            placeholder="Make a difference today!"
            value={title}
            onChange={(event) => handleChange(event.target.value, 'title')}
          />
        </Wrapper>
      </InputWrapper>
      <TextAreaWrapper>
        <MessageLabel>Content</MessageLabel>
        <Wrapper>
          <TextArea
            rows="4"
            cols="50"
            type="text"
            placeholder="Your contribution today can improve the lives
 of so many. Please join us in making
 a difference."
            value={content}
            onChange={(event) => handleChange(event.target.value, 'content')}
          />
        </Wrapper>
      </TextAreaWrapper>
      <ColorWrapper>
        <ColorContainer>
          <MessageLabel className="color-label">Text color</MessageLabel>
          <ColorComponents
            type="color"
            value={textColor}
            onChange={(event) => handleChange(event.target.value, 'textColor')}
          />
        </ColorContainer>
        <ColorContainer>
          <MessageLabel className="background-label">Background color</MessageLabel>
          <ColorComponents
            type="color"
            value={backgroundColor}
            onChange={(event) => handleChange(event.target.value, 'backgroundColor')}
          />
        </ColorContainer>
      </ColorWrapper>
      <InputWrapper className="position">
        <MessageLabel>Position</MessageLabel>
        <Wrapper>
          <Input className="input-field" type="text" placeholder="Make a difference today!" />
        </Wrapper>
      </InputWrapper>
      <CheckBoxWrapper>
        <CheckBoxLabel className="default-amount">Default amount</CheckBoxLabel>
        <Checkbox pink />
        <CheckBoxLabel>Match checkout setting</CheckBoxLabel>
      </CheckBoxWrapper>
      <CheckBoxWrapper className="checkbox">
        <Checkbox pink />
        <CheckBoxLabel>Customize</CheckBoxLabel>
      </CheckBoxWrapper>
    </AppearanceWrapper>
  );
}

export default Appearance;

const AppearanceWrapper = styled.div`
  margin-top: 3.2rem;
  .input-field {
    width: 31.2rem;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 2.4rem;
  }
  .checkbox {
    margin: 0 0 4rem 22.5rem;
  }
  .position {
    margin-left: 14.3rem;
  }
  .title {
    padding-left: 16.6rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1.7rem;
`;

const MessageLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  display: flex;
  align-items: center;
  height: 4.4rem;
`;

const Wrapper = styled.div``;

const ColorContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-bottom: 2.4rem;
  .color-label {
    padding-top: 1rem;
    width: 8rem;
    margin-left: 13.3rem;
  }
  .background-label {
    width: 14.5rem;
    margin-left: 6.8rem;
  }
`;

const ColorWrapper = styled.div`
  /* padding-left: 11.2rem; */
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  margin: 0 0 2rem 8.5rem;
  .default-amount {
    margin-right: 1.6rem;
  }
`;

const CheckBoxLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
`;

const TextArea = styled.textarea`
  width: 31.2rem;
  outline: none;
  background-color: ${COLORS.white};
  border: 0.1rem solid ${COLORS['gray-500']};
  margin-bottom: 2.4rem;
  border-radius: 0.5rem;
  padding: 2.1rem 1.7rem 3.5rem 1.5rem;
  /* resize: none; */
`;

const TextAreaWrapper = styled.div`
  display: flex;
  gap: 1.7rem;
  padding-left: 13.8rem;
`;
