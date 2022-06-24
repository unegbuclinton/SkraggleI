import ColorComponents from 'components/atoms/ColorComponent';
import FileUploadButton from 'components/atoms/FileUploadButton';
import Input from 'components/atoms/Input/Input';
import Slider from 'components/atoms/Slider';
// import Slider from 'components/atoms/Slider';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconUploadFile } from 'icons';
import React, { useState } from 'react';
import styled from 'styled-components';

function DonateAppearance() {
  const [black, setBlack] = useState('#000000');

  return (
    <DonateAppearanceWrapper>
      <DonateAppearanceLabel>Label</DonateAppearanceLabel>
      <Input type="text" className="input-field" placeholder="Donate" />
      <SliderContainer>
        <SliderLabel> Size</SliderLabel>
        <SliderWrapper>
          <Slider className="slider-border" sliderText="slider-text" text="px" />
        </SliderWrapper>
      </SliderContainer>
      <SliderContainer>
        <SliderLabel>Margin</SliderLabel>
        <SliderWrapper>
          <Slider className="slider-border" sliderText="slider-text" text="px" />
        </SliderWrapper>
      </SliderContainer>
      <div className="editor-container__upload">
        <UrlLabel>
          Image
          <span>?</span>
        </UrlLabel>
        <FileUploadButton imgPreview="upload-button" className="image-upload">
          <DPIconUploadFile />
        </FileUploadButton>
      </div>
      <ColorsWrapper>
        <WrapperColor>
          <ColorLabel>Text color</ColorLabel>
          <ColorComponents type="color" value={black} onChange={(e) => setBlack(e.target.value)} />
        </WrapperColor>
      </ColorsWrapper>
    </DonateAppearanceWrapper>
  );
}

export default DonateAppearance;

const DonateAppearanceWrapper = styled.div`
  padding: 0 2.4rem 0 2.4rem;
  .input-field {
    width: 100%;
    background-color: ${COLORS.white};
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 3.2rem;
  }
  .editor-container__upload {
    margin-bottom: 2.4rem;
  }
`;

const DonateAppearanceLabel = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-500']};
  margin-bottom: 0.8rem;
  cursor: default;
`;

const ColorsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;

const ColorLabel = styled.p`
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
  cursor: default;
  padding-bottom: 0.8rem;
`;

export const SliderLabel = styled.label`
  width: 11rem;
  position: relative;
  top: 0.5rem;
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;

export const SliderWrapper = styled.div`
  width: 100%;
  position: relative;

  .slider-border {
    padding: 0;
  }
  .slider-text {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.base};
    color: ${COLORS['grey-500']};
  }
`;

const WrapperColor = styled.div``;

export const SliderContainer = styled.div`
  display: flex;
  margin-bottom: 2.4rem;
  font-size: ${FONTSIZES.small};
`;

const UrlLabel = styled.h2`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-400']};
  padding-bottom: 0.8rem;
  display: flex;
  span {
    height: 1.4rem;
    width: 1.4rem;
    border: 0.1rem solid ${COLORS['grey-400']};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: small;
    margin: 0.4rem 0 0 1.6rem;
  }
`;
