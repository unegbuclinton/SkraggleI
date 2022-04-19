import DropdownComponent from "components/atoms/Dropdown";
import React, { useState } from "react";
import data from "utilities/filterData.json";
import styled from "styled-components";
import Card from "components/atoms/Card";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import { COLORS } from "constants/colors";
import BarChart from "components/organisms/BarChart";
import PieChart from "components/organisms/PieChart";

function DonorType() {
  const [selected, setSelected] = useState("Filters");
  const series = [
    {
      name: "Skraggle",
      data: [39, 30, 35, 25, 40, 15],
    },
  ];

  return (
    <TypeWrapper>
      <div className="transaction">
        <Card>
          <TypeHeader>
            <p className="transaction-text">2021 Transaction Types</p>
            <DropdownComponent
              selected={selected}
              setSelected={setSelected}
              data={data}
            />
          </TypeHeader>

          <div className="pie-container">
            <PieChart width={550} height={360} />
          </div>
        </Card>
      </div>
      <div className="donor-score">
        <Card>
          <TypeHeader>
            <p className="donor-text">Donor Score</p>
          </TypeHeader>
          <div className="bar-container">
            <BarChart
              series={series}
              categories={["30", "40", "60"]}
              width={650}
              height={350}
            />
          </div>
        </Card>
      </div>
    </TypeWrapper>
  );
}

export default DonorType;

const TypeWrapper = styled.div`
  margin: 1.6rem 0;
  width: 100%;
  display: flex;
  gap: 1.2rem;

  .transaction {
    width: 100%;
  }

  .donor-score {
    width: 100%;
  }

  .bar-container,
  .pie-container {
    display: flex;
    justify-content: center;
    padding-top: 2.4rem;
  }
  .pie-container {
    display: flex;
    justify-content: center;
    margin: 0 5.6rem 0 4rem;
    border-top: 1px solid ${COLORS.torquoise};
  }
`;

const TypeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 4.1rem 1.2rem 4.1rem;

  .transaction-text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS.deepPurple};
  }

  .donor-text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS.deepPurple};
    width: 100%;
    margin: 0.8rem 5.6rem 0 4.1rem;
    border-bottom: 1px solid ${COLORS.torquoise};
    padding-bottom: 1.6rem;
  }
`;


