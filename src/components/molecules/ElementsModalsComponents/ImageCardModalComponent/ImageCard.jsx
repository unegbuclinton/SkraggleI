import Checkbox from 'components/atoms/CheckBox';
import ColorComponents from 'components/atoms/ColorComponent';
import FileUploadButton from 'components/atoms/FileUploadButton';
import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';

function ImageCard() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [borderColor, setBorderColor] = useState('#212830');
  return (
    <ImageCardWrapper>
      <ImageCardFieldWrapper>
        <ImageCardLabel>Open campaign</ImageCardLabel>
        <FileUploadButton imgPreview="campaign-image" className="image-container" />
      </ImageCardFieldWrapper>

      <ImageCardFieldWrapper>
        <ImageCardLabel>Content</ImageCardLabel>
        <ImageCardTextArea placeholder="Description of the need and/or donor Impact" />
      </ImageCardFieldWrapper>

      <ImageCardFieldWrapper>
        <ImageCardLabel></ImageCardLabel>
        <Checkbox pink label="Launch checkout with this message" />
      </ImageCardFieldWrapper>

      <ImageCardFieldWrapper>
        <ImageCardLabel>Card width</ImageCardLabel>
        <SliderWrapper>
          <Slider className="slider-border" text="px" />
        </SliderWrapper>
      </ImageCardFieldWrapper>

      <ImageCardFieldWrapper>
        <ImageCardLabel>Card Height</ImageCardLabel>
        <SliderWrapper>
          <Slider className="slider-border" text="px" />
        </SliderWrapper>
      </ImageCardFieldWrapper>

      <ImageCardFieldWrapper>
        <ImageCardLabel>Text color</ImageCardLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <ColorComponents
              type="color"
              value={borderColor}
              onChange={(e) => setBorderColor(e.target.value)}
            />
          </ColorContainer>
        </ColorContainerWrapper>
      </ImageCardFieldWrapper>

      <ImageCardFieldWrapper>
        <ImageCardLabel>Background color</ImageCardLabel>
        <ColorContainerWrapper>
          <ColorContainer>
            <ColorComponents
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
            />
          </ColorContainer>
        </ColorContainerWrapper>
      </ImageCardFieldWrapper>

      <ImageCardFieldWrapper>
        <ImageCardLabel>Border size</ImageCardLabel>
        <SliderWrapper>
          <Slider className="slider-border" text="px" />
        </SliderWrapper>
      </ImageCardFieldWrapper>

      <ImageCardFieldWrapper>
        <ImageCardLabel>Border radius</ImageCardLabel>
        <SliderWrapper>
          <Slider className="slider-border" text="px" />
        </SliderWrapper>
      </ImageCardFieldWrapper>

      <ImageCardFieldWrapper>
        <ImageCardLabel></ImageCardLabel>
        <Checkbox pink className="button-checkbox" label="Show Shadow" />
      </ImageCardFieldWrapper>
    </ImageCardWrapper>
  );
}

export default ImageCard;

export const ImageCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 3.3rem;
`;

export const ImageCardFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;
  margin-left: 6.4rem;
  gap: 0.8rem;

  font-size: ${FONTSIZES.small};

  .behavior__campaign {
    max-width: 31.2rem;
    width: 100%;
    background-color: ${COLORS.torquoise};
  }

  .campaign-image {
    max-width: 20rem;
    width: 100%;
    height: 10.4rem;
  }

  .image-container {
    max-width: 20rem;
    height: 10.4rem;
  }
`;

export const ImageCardLabel = styled.label`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;

export const ImageCardTextArea = styled.textarea`
  max-width: 26rem;
  height: 8rem;
  border: 1px solid ${COLORS['gray-500']};
  border-radius: 5px;
  padding: 0.6rem 5.9rem 3.2rem 1.1rem;
  outline: none;
`;

export const ColorContainerWrapper = styled.div`
  width: 100%;
  max-width: 13.4rem;
`;

export const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  justify-content: center;
  width: 13.4rem;
  height: 6.4rem;
  border: 1px solid ${COLORS['gray-500']};
  border-radius: 5px;
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-400']};
`;

export const ColorCircle = styled.div`
  width: 23.22px;
  height: 23.22px;
  border-radius: 50%;
  background-color: #477be0;
  border: 1px solid #e6eff1;
`;
export const SliderWrapper = styled.div`
  width: 100%;
  max-width: 21rem;
  position: relative;

  .slider-border {
    padding: 0;
  }
`;
