import { React, forwardRef } from "react";

import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";

const CustomFields = forwardRef(({className}, customref) => {
    return(
        <CustomFieldWrapper className={className} ref={customref}>
          <div className="fundraiser__top">
            <div className="fundraiser__title">
              <h1 className="fundraiser__heading">Custom Fields</h1>
            </div>
          </div>
          <div className="fundraiser__down">
            <div className="fundraiser__custom-field">
              <h1 className="fundraiser__custom-title">
                There are no custom fields on the associated campaign
              </h1>
            </div>
          </div>
        </CustomFieldWrapper>
    )
})

export default CustomFields

export const CustomFieldWrapper = styled.div`
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
  }
`;
