import Card from "components/atoms/Card";
import AreaChart from "components/organisms/AreaChart";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import React from "react";
import styled from "styled-components";

const KeyPerformanceIndicatiors = () => {
  const series1 = [
    {
      name: "Skraggle",
      data: [300, 300, 300],
      color: "#578EC1",
    },
  ];
  const series2 = [
    {
      name: "Skraggle",
      data: [300, 305, 300],
      color: "#578EC1",
    },
  ];
  const series3 = [
    {
      name: "Skraggle",
      data: [300, 300, 300],
      color: "#578EC1",
    },
  ];
  const series4 = [
    {
      name: "Skraggle",
      data: [300, 300, 300],
      color: "#578EC1",
    },
  ];
  return (
    <KPIWrapper>
      <KPIHeader>Key Performance Indicators (KPIs)</KPIHeader>
      <KPIContentWrapper>
        <KPIContentCard>
          <KPIContentCardHeader>Donor Retention Rate</KPIContentCardHeader>
          <KPIContentCardBody>
            <div>
              <h2>Current</h2>
              <h1>38%</h1>
            </div>
            <div>
              <h2>Benchmark</h2>
              <h1>36%</h1>
            </div>
          </KPIContentCardBody>
          <KPIContentCardChart>
            <AreaChart
              series={series1}
              height={120}
              markers={{
                size: 5,
                colors: "#578EC1",
              }}
              yaxis={{
                labels: {
                  show: false,
                  formatter: function (val) {
                    return Number(val).toLocaleString() + "€";
                  },
                },
              }}
              stroke={{
                colors: ["#578EC1"],
              }}
            />
          </KPIContentCardChart>
        </KPIContentCard>
        <KPIContentCard>
          <KPIContentCardHeader>
            Donor Acquisition Rate (Monthly)
          </KPIContentCardHeader>
          <KPIContentCardBody>
            <div>
              <h2>Current</h2>
              <h1>38%</h1>
            </div>
            <div>
              <h2>Benchmark</h2>
              <h1>36%</h1>
            </div>
          </KPIContentCardBody>
          <KPIContentCardChart>
            <AreaChart
              series={series2}
              height={120}
              markers={{
                size: 5,
                colors: "#578EC1",
              }}
              yaxis={{
                labels: {
                  show: false,
                  formatter: function (val) {
                    return Number(val).toLocaleString() + "€";
                  },
                },
              }}
              stroke={{
                colors: ["#578EC1"],
              }}
            />
          </KPIContentCardChart>
        </KPIContentCard>
        <KPIContentCard>
          <KPIContentCardHeader>Median Gift Size</KPIContentCardHeader>
          <KPIContentCardBody>
            <div>
              <h2>Current</h2>
              <h1>38%</h1>
            </div>
            <div>
              <h2>Benchmark</h2>
              <h1>36%</h1>
            </div>
          </KPIContentCardBody>
          <KPIContentCardChart>
            <AreaChart
              series={series3}
              height={120}
              markers={{
                size: 5,
                colors: "#578EC1",
              }}
              yaxis={{
                labels: {
                  show: false,
                  formatter: function (val) {
                    return Number(val).toLocaleString() + "€";
                  },
                },
              }}
              stroke={{
                colors: ["#578EC1"],
              }}
            />
          </KPIContentCardChart>
        </KPIContentCard>
        <KPIContentCard>
          <KPIContentCardHeader>
            Donor Acquisition Rate (Monthly)
          </KPIContentCardHeader>
          <KPIContentCardBody>
            <div>
              <h2>Current</h2>
              <h1>38%</h1>
            </div>
            <div>
              <h2>Benchmark</h2>
              <h1>36%</h1>
            </div>
          </KPIContentCardBody>
          <KPIContentCardChart>
            <AreaChart
              series={series4}
              height={120}
              markers={{
                size: 5,
                colors: "#578EC1",
              }}
              yaxis={{
                labels: {
                  show: false,
                  formatter: function (val) {
                    return Number(val).toLocaleString() + "€";
                  },
                },
              }}
              stroke={{
                colors: ["#578EC1"],
              }}
            />
          </KPIContentCardChart>
        </KPIContentCard>
      </KPIContentWrapper>
    </KPIWrapper>
  );
};

export default KeyPerformanceIndicatiors;

const KPIWrapper = styled(Card)`
  padding: 0 4.7rem 0 4.1rem;
  flex: 1;
`;

const KPIHeader = styled.div`
  padding: 2.4rem 0 1.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.medium};
  color: ${COLORS["header-grey"]};

  &:after {
    content: "";
    position: absolute;
    background: ${COLORS.torquoise};
    height: 1px;
    width: calc(100% - 3.1rem);
    bottom: 0;
    left: 0;
  }
`;

const KPIContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.6rem;
  padding: 8.7rem 0 2.8rem;
`;

const KPIContentCard = styled.div`
  border: 1px solid #e2e6ff;
  padding-right: 10.5rem;
  padding-left: 1.638rem;
  padding-bottom: 2.4rem;
  padding-top: 1.6rem;
`;

const KPIContentCardHeader = styled.p`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
  margin-bottom: 0.8rem;
`;

const KPIContentCardBody = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS["grey-200"]};
  }

  h1 {
    font-size: ${FONTSIZES.base};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS.deepPurple};
  }
`;
const KPIContentCardChart = styled.div``;
