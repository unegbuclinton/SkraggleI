import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import {
  DPIconAudio,
  DPIconClickIcon,
  DPIconEform,
  DPIconFormIcon,
  DPIconImage,
  DPIconImagePop,
  DPIconInput,
  DPIconMedia,
  DPIconOption,
  DPIconSelectBox,
  DPIconVideo,
  DPIconVideoPop
} from 'icons';
import React from 'react';
import styled from 'styled-components';

function AddElement() {
  const elemenText = [
    {
      title: 'HEADLINE',
      initial: 'H'
    },
    {
      title: 'SUB-HEADLINE',
      initial: 'A'
    },
    {
      title: 'PARAGRAPH',
      initial: 'P'
    },
    {
      title: 'BULLET LIST',
      initial: 'B'
    },
    {
      title: 'QOUTE',
      initial: 'Q'
    }
  ];
  const elementMedia = [
    {
      title: 'IMAGE',
      initial: <DPIconImage />
    },
    {
      title: 'IMAGE POPUP',
      initial: <DPIconImagePop />
    },
    {
      title: 'VIDEO',
      initial: <DPIconVideo />
    },
    {
      title: 'VIDEO POPUP',
      initial: <DPIconVideoPop />
    },
    {
      title: 'AUDIO PLAYER',
      initial: <DPIconAudio />
    }
  ];
  const elementForms = [
    {
      title: 'BUTTON',
      initial: <DPIconClickIcon />
    },
    {
      title: 'FACBOOK OPTION',
      initial: <DPIconOption />
    },
    {
      title: 'INPUT',
      initial: <DPIconInput />
    },
    {
      title: 'SELECT BOX',
      initial: <DPIconSelectBox />
    },
    {
      title: 'Embaded Form',
      initial: <DPIconEform />
    }
  ];
  return (
    <AddElementWrapper>
      <Input className="element-input" placeholder="Search elements" />

      <AddElementContainer>
        <div className="sub-head">
          <p className="sub-head__left">Aa</p>
          <p className="sub-head__right"> Text</p>
        </div>
        <AddElementsItems>
          {elemenText?.map(({ title, initial }, idx) => (
            <div className="element-item" key={idx + 1}>
              <p className="element-item__initial">{initial}</p>
              <div className="element-item__description">{title}</div>
            </div>
          ))}
        </AddElementsItems>
      </AddElementContainer>

      <AddElementContainer>
        <div className="sub-head">
          <span>
            <DPIconMedia />
          </span>
          <p className="sub-head__right"> Media</p>
        </div>
        <AddElementsItems>
          {elementMedia?.map(({ title, initial }, idx) => (
            <div className="element-item" key={idx + 1}>
              <p className="element-item__initial">{initial}</p>
              <div className="element-item__description">{title}</div>
            </div>
          ))}
        </AddElementsItems>
      </AddElementContainer>

      <AddElementContainer>
        <div className="sub-head">
          <span>
            <DPIconFormIcon />
          </span>
          <p className="sub-head__right"> Form</p>
        </div>
        <AddElementsItems>
          {elementForms?.map(({ title, initial }, idx) => (
            <div className="element-item" key={idx + 1}>
              <p className="element-item__initial">{initial}</p>
              <div className="element-item__description">{title}</div>
            </div>
          ))}
        </AddElementsItems>
      </AddElementContainer>
    </AddElementWrapper>
  );
}

export default AddElement;

const AddElementWrapper = styled.div`
  padding-left: 0.7rem;

  .element-input {
    background-color: ${COLORS.white};
    border: 1px solid ${COLORS['porcelain-white']};
  }
`;
const AddElementContainer = styled.div`
  padding-left: 0.4rem;
  margin-top: 0.8rem;
  margin-bottom: 1.4rem;

  .sub-head {
    display: flex;
    gap: 1rem;
    align-items: flex-end;
    padding-left: 0.3rem;
    margin-bottom: 1.4rem;
    border-bottom: 1px solid ${COLORS['moore-grey']};

    &__left {
      font-size: ${FONTSIZES.lg};
      color: ${COLORS['grey-400']};
      font-weight: ${FONTWEIGHTS.normal};
    }
    &__right {
      font-size: ${FONTSIZES.small};
      color: ${COLORS['grey-400']};
      font-weight: ${FONTWEIGHTS.medium};
    }
  }

  .element-item {
    display: flex;
    justify-content: center;
    position: relative;
    width: 14.8rem;
    height: 10rem;
    border: 1px solid ${COLORS['gray-500']};
    border-radius: 0.5rem;

    &__initial {
      padding-top: 1.7rem;
      font-size: ${FONTSIZES['logo-large']};
      color: ${COLORS['gray-500']};
    }

    &__description {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 0;
      width: 100%;
      height: 3rem;
      background-color: ${COLORS['gray-500']};
      font-size: ${FONTSIZES.small};
      color: ${COLORS.white};
    }
  }
`;

const AddElementsItems = styled.div`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 1fr 1fr;
`;
