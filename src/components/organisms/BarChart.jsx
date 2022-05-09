import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({ series, categories, width, height, chart, legend }) => {
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
            text: 'Time of year',
            align: 'left',
            style: {
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#1F2847',
              position: 'relative'
            }
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
