import React from "react";
import BarChart from "components/organisms/BarChart";
import styled from "styled-components";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import { COLORS } from "constants/colors";
import Card from "components/atoms/Card";

function DonorScore() {
  const series = [
    {
      name: "Data",
      color: "#9FFF97",
      data: [
        {
          x: "category A",
          y: 20,
          fillColor: "#FFE768",
        },
        {
          x: "category A",
          y: 30,
          fillColor: "#FFE768",
        },
        {
          x: "category B",
          y: 13,
          fillColor: "#FF576B",
        },
        {
          x: "category A",
          y: 40,
          fillColor: "#FFE768",
        },
        {
          x: "category C",
          y: 60,
          fillColor: "#9FFF97",
        },
        {
          x: "category B",
          y: 20,
          fillColor: "#FF576B",
        },
        {
          x: "category A",
          y: 13,
          fillColor: "#FFE768",
        },
      ],
    },
  ];

  return (
    <div className="duration-wrapper">
      <DonorWrapper>
        <BarchartWrapper>
          <div className="duraton-chart">
            <BorderBottom />
            <BarChart
              series={series}
              legend={{
                show: true,
                showForSingleSeries: true,
                customLegendItems: ["Highest", "Medium", "Lowest"],
                position: "top",
                offsetY: -34,
                horizontalAlign: "right",
                fontSize: "12px",
                markers: {
                  fillColors: ["#9FFF97", "#FFE768","#FF576B"],
                  width: "16px",
                  height: "16px",
                  offsetY: 3,
                  offsetX: -2,
                },
                itemMargin: {
                  horizontal: 10,
                },
              }}
              title={{
                text: "Donor Score",
                align: "left",
                style: {
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#1F2847",
                  position: "relative",
                },
              }}
              categories={[" ", "30", " ", "40", " ", "60"]}
              width={650}
              height={350}
            />
          </div>
          <div className="donattion-title">
            Donors likely to donate each month
          </div>
        </BarchartWrapper>
      </DonorWrapper>
    </div>
  );
}

export default DonorScore;

const BarchartWrapper = styled(Card)`
  padding: 5.4rem 3.1rem 3.5rem 2.6rem;
  overflow: auto;
  text-align: center;
  .donattion-title {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.xsmall};
    letter-spacing: 0.02em;
    color: ${COLORS.deepPurple};
  }
`;

const DonorWrapper = styled.div`
  margin-bottom: 1.6rem;

  .Donor-text,
  .duration-text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS["header-grey"]};
    margin: 0;
    padding: 2.4rem 0rem 1.7rem 4rem;
  }
`;
const BorderBottom = styled.div`
  width: 100%;
  background-color: ${COLORS.torquoise};
  height: 0.1rem;
  position: relative;
  margin-bottom: -3.5rem;
`;
