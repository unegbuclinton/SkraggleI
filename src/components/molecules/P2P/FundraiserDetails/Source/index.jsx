import React from "react";

import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";

const Source = ({className, ref}) => {
    return(
        <SourceWrapper className={className} ref={ref}>
          <div className="fundraiser__top">
            <div className="fundraiser__title">
              <h1 className="fundraiser__heading">Source</h1>
            </div>
          </div>
          <div className="fundraiser__down">
            <div className="fundraiser__row">
              <h1 className="fundraiser__titles">Source</h1>
              <p className="fundraiser__p2">Leaf Inc</p>
            </div>
            <div className="fundraiser__row">
              <h1 className="fundraiser__titles">Dashboard</h1>
              <p className="fundraiser__p2">Mohammad Adam</p>
            </div>
          </div>
        </SourceWrapper>
    )
}

export default Source

export const SourceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};
  margin-bottom: 2.4rem;
  padding-bottom: 3rem;
  .fundraiser {
    &__top {
      width: 100%;
      height: 8.4rem;
      display: flex;
      border-bottom: 1px solid #9a9aa9;
      justify-content: space-between;
      align-items: center;
      padding-left: 4.8rem;
      padding-right: 4.9rem;
    }
    &__title {
      display: flex;
      flex-direction: column;
    }
    &__heading {
      font-size: ${FONTSIZES.xxlarge};
      font-weight: ${FONTWEIGHTS.normal};
    }
    &__down {
      display: flex;
      flex-direction: column;
      padding-left: 4.8rem;
      padding-right: 4.9rem;
      padding-top: 1.6rem;
    }
    &__row {
      display: flex;
    }
    &__col1 {
      display: flex;
      flex-direction: column;
    }
    &__col2 {
      display: flex;
      flex-direction: column;
    }
    &__titles {
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.base};
      margin-right: 20rem;
      color: #9a9aa9;
      margin-bottom: 1.6rem;
      width: 16rem;
    }
    &__p1 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #8358fe;
      text-align: left;
    }
    &__p2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 1.6rem;
    }
    &__p3 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 1.6rem;
      margin-left: 2.7rem;
    }
    &__custom-field {
      display: flex;
      width: 100%;
    }
    &__custom-title {
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.base};
      margin-right: 20rem;
      color: #9a9aa9;
      margin-bottom: 1.6rem;
    }
    &__donations{
        font-size: ${FONTSIZES.base};
        font-weight: ${FONTWEIGHTS.normal};
    }
  }
`;

