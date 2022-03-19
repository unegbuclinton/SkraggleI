import React from 'react';
import { Percentage, ProgressBarOuter, ProgressBarWrapper } from './styles';
const ProgressBar = ({ className, currentValue, target, ...rest }) => {
  const percentage = (currentValue / target) * 100;
  return (
    <ProgressBarWrapper className={className}>
      <div className="progressbar">
        <h2 className="progressbar__heading">Yearly Goal</h2>
        <ProgressBarOuter>
          <Percentage percentage={percentage} />
        </ProgressBarOuter>
        <div className="progressbar__label-wrapper">
          <div className="progressbar__label-wrapper--label">
            <span className="progressbar__label-wrapper--label--amount">
              ${currentValue}
            </span>
            <span className="progressbar__label-wrapper--label--text">
              raised
            </span>
            <span className="progressbar__label-wrapper--label--percent">
              ({Math.round(percentage)}%)
            </span>
          </div>
          <div className="progressbar__label-wrapper--label">
            <span className="progressbar__label-wrapper--label--text">
              Target
            </span>
            <span className="progressbar__label-wrapper--label--amount">
              ${target}
            </span>
          </div>
        </div>
      </div>
    </ProgressBarWrapper>
  );
};


export default ProgressBar;
