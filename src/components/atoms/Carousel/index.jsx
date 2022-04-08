import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";

import { images } from "utilities/imageData";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <CarouselWrapper className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        ></div>
        <div className="center">
          <h1>{images[currImg].title}</h1>
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        ></div>
      </div>
    </CarouselWrapper>
  );
}

export default Carousel;

export const CarouselWrapper = styled.div`
  width: 510px;
  height: 519px;
  background-color: black;
  .carouselInner {
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
  }

  .left {
    flex: 5%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
    color: white;
    cursor: pointer;
  }

  .center {
    flex: 80%;
    height: 100%;
    display: grid;
    place-items: center;
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
    text-align-last: center;
  }

  h1 {
    font-size: 5rem;
  }

  p {
    font-size: 2rem;
  }

  h1,
  p {
    background-color: rgb(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 9px;
  }

  .right {
    flex: 5%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
    color: white;
    cursor: pointer;
  }
`;
