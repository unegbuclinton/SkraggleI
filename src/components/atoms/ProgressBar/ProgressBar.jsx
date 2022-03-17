import React from "react";
import { ProgressBarWrapper, ProgressBarOuter, Percentage } from "./styles";

const ProgressBar = ({ className, ...rest }) => {
  return (
    <ProgressBarWrapper className={className}>
      <div className="progressbar">
        <h2 className="progressbar__heading">Yearly Goal</h2>
        <ProgressBarOuter className={className} {...rest}>
          <Percentage className={className} {...rest} />
        </ProgressBarOuter>
        <div className="progressbar__label-wrapper">
          <div className="progressbar__label-wrapper--label">
            <span className="progressbar__label-wrapper--label--amount">
              $19540.23
            </span>
            <span className="progressbar__label-wrapper--label--text">
              raised
            </span>
            <span className="progressbar__label-wrapper--label--percent">
              (12%)
            </span>
          </div>
          <div className="progressbar__label-wrapper--label">
            <span className="progressbar__label-wrapper--label--text">
              Target
            </span>
            <span className="progressbar__label-wrapper--label--amount">
              $500,00
            </span>
          </div>
        </div>
      </div>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
