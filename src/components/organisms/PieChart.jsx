import { COLORS } from "constants/colors";
import React from "react";
import Chart from "react-apexcharts";

const PieChart = ({width,height}) => {
  return (
    <>
      <Chart
        type="pie"
        width={width}
        height={height}
        series={[350,50]}
        options={{
          xaxis: {},
          colors :['#FF576B','#1E003E']
        }}
      ></Chart>
    </>
  );
};

export default PieChart;
