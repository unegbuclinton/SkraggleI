import { COLORS } from 'constants/colors';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { images } from 'utilities/imageData';

const Slideshow = () => {
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useState(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <SlideshowWrapper className="slideshow">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {images.map((img, index) => (
          <img className="slide" src={img.img} alt="" key={index} />
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}></div>
        ))}
      </div>
    </SlideshowWrapper>
  );
};

export default Slideshow;

export const SlideshowWrapper = styled.div`
  overflow: hidden;
  width: 51rem;
  .slideshowSlider {
    white-space: nowrap;
    transition: ease 1000ms;
  }

  .slide {
    display: inline-block;
    height: 100%;
    width: 100%;
  }

  .slideshowDots {
    text-align: center;
  }

  .slideshowDot {
    display: inline-block;
    height: 0.6rem;
    width: 0.6rem;
    border-radius: 50%;

    cursor: pointer;
    margin: 17px 7px 0px;
    background-color: ${COLORS['light-pink']};
  }

  .slideshowDot.active {
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${COLORS.pink};
  }
`;
