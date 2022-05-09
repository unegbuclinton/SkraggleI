import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({ series, categories, width, height }) => {
  return (
    <>
      <Chart
        type="bar"
        width={width}
        height={height}
        series={series}
        options={{
          toolbar: {
            show: false
          },
          xaxis: {
            categories
          }
        }}></Chart>
    </>
  );
};

export default BarChart;
