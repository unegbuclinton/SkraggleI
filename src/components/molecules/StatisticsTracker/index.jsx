import CircularProgressBar from "components/atoms/CircularProgressBar";
import { COLORS } from "constants/colors";
import { FONTWEIGHTS } from "constants/font-spec";
import { FONTSIZES } from "constants/font-spec";
import React from "react";
import styled from "styled-components";

function StatisticsTracker({ percentage, colour, num,value, text,header }) {
  return (
    <StatisticWrapper>
      <CircularProgressBar percentage={percentage} colour={colour} num={num} header={header}/>

      <div className="statistic-footer">
        <p className="statistic-num"> {value}</p>
        <p className="statistic-text"> {text}</p>
      </div>
    </StatisticWrapper>
  );
}

export default StatisticsTracker;

const StatisticWrapper = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .statistic-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .statistic-num {
      color: ${COLORS.pink};
      font-size: ${FONTSIZES.xxlarge};
      font-weight: ${FONTWEIGHTS.bold};
    }
    .statistic-text {
        
      font-size: ${FONTSIZES.lg};
      font-weight: ${FONTWEIGHTS.bold};
    }
  }
`;
