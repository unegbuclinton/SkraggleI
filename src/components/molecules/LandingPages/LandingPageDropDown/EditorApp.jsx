import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import {
  DPIconAwesomeFont,
  DPIconEditApp,
  DPIconElementheme,
  DPIconFonts,
  DPIconMobilePreview,
  DPIconPhotos,
  DPIconSaveIcon
} from 'icons';
import React from 'react';
import styled from 'styled-components';

function EditorApp() {
  const editApp = [
    {
      icon: <DPIconSaveIcon />,
      header: 'SAVE ROWS & SECTIONS',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      icon: <DPIconElementheme />,
      header: 'ELEMENT THEMES',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      icon: <DPIconFonts />,
      header: 'GOOGLE FONTS',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      icon: <DPIconPhotos />,
      header: 'SEARCH PHOTOS',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      icon: <DPIconAwesomeFont />,
      header: 'FONT AWESOME',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      icon: <DPIconMobilePreview />,
      header: 'MOBILE PREVIEW',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];
  return (
    <EditorAppWrapper>
      <EditorAppContainer>
        <span>
          <DPIconEditApp />
        </span>
        <EditorAppHeader>Edit Apps</EditorAppHeader>
      </EditorAppContainer>
      <EditorAppBodyContainer>
        {editApp?.map(({ icon, text, header }, idx) => (
          <EditorAppBodyItem key={idx}>
            <span>{icon}</span>
            <div className="item-info">
              <h3>{header}</h3>
              <p>{text}</p>
            </div>
          </EditorAppBodyItem>
        ))}
      </EditorAppBodyContainer>
    </EditorAppWrapper>
  );
}

export default EditorApp;

const EditorAppWrapper = styled.div`
  position: absolute;
  top: 8rem;
  left: 30rem;
  background-color: ${COLORS.torquoise};
  border-radius: 0.5rem;
  padding: 3.2rem 2.4rem 2.4rem 2.4rem;
  z-index: 10;
`;

const EditorAppContainer = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const EditorAppBodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const EditorAppBodyItem = styled.div`
  background-color: ${COLORS.white};
  max-width: 29.9rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1.75rem;
  margin-bottom: 2.6rem;
  margin-right: 3.7rem;

  .item-info {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    h3 {
      font-size: ${FONTSIZES.xsmall};
      color: ${COLORS['grey-500']};
      font-weight: ${FONTWEIGHTS.bold};
    }

    p {
      font-size: ${FONTSIZES.xsmall};
      color: ${COLORS['grey-400']};
      font-weight: ${FONTWEIGHTS.normal};
    }
  }
`;

const EditorAppHeader = styled.h1`
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.bold};
  color: ${COLORS['grey-400']};
  margin-bottom: 2.5rem;
`;
