import React from "react";
import Chart from "react-apexcharts";

const PieChart = ({ width, height }) => {
  return (
    <>
      <Chart
        type="pie"
        width={width}
        height={height}
        series={[350, 50]}
        options={{
          legend: {
            show: false,
          },
          chart:{
            width: '100%',
            redrawOnParentResize: true
          },
          xaxis: {},
          colors: ["#BEE0FF", "#578EC1"],
        }}
      ></Chart>
    </>
  );
};

export default PieChart;