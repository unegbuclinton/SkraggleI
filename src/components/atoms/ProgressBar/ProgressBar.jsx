import React from "react";
import { ProgressBarWrapper, ProgressBarOuter, Percentage } from "./styles";

const ProgressBar = ({
  className,
  value,
  target,
  heading,
  raisedLabel,
  targetLabel,
}) => {
  const percentage = (value / target) * 100;
  return (
    <ProgressBarWrapper className={className}>
      <div className="progressbar">
        {heading && <h2 className="progressbar__heading">{heading}</h2>}
        <ProgressBarOuter>
          <Percentage percentage={percentage} />
        </ProgressBarOuter>
        <div className="progressbar__label-wrapper">
          <div className="progressbar__label-wrapper--label">
            <span className="progressbar__label-wrapper--label--amount">
              ${value.toLocaleString()}
            </span>
            <span className="progressbar__label-wrapper--label--text">
              {raisedLabel}
            </span>
            <span className="progressbar__label-wrapper--label--percent">
              ({Math.round(percentage)}%)
            </span>
          </div>
          <div className="progressbar__label-wrapper--label">
            <span className="progressbar__label-wrapper--label--text">
              {targetLabel}
            </span>
            <span className="progressbar__label-wrapper--label--amount">
              ${target.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
