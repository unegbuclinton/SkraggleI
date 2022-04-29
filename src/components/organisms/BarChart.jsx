import React from "react";
import Chart from "react-apexcharts";

const BarChart = ({ series, categories, width, height, stacked }) => {
  return (
    <>
      <Chart
        type="bar"
        width={width}
        height={height}
        series={series}
        stacked={stacked}
        options={{
          xaxis: {
            categories,
          },
        }}
      ></Chart>
    </>
  );
};

export default BarChart;
