import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({ series, categories, width, height, chart, legend, title }) => {
  return (
    <>
      <Chart
        type="bar"
        width={width}
        height={height}
        series={series}
        options={{
          chart: {
            stacked: false,
            toolbar: false,
            ...chart
          },
          xaxis: {
            categories
          },
          title: {
            ...title
          },
          legend: {
            show: false,
            ...legend
          }
        }}></Chart>
    </>
  );
};

export default BarChart;
