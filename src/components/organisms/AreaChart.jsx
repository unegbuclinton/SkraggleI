import { COLORS } from 'constants/colors';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const AreaChart = ({ data, categories, height, yaxis, markers, type, ...rest }) => {
  const dataProps = {
    options: {
      chart: {
        type: 'area',

        toolbar: {
          show: false
        },
        colors: ['#FF576B'],
        fill: {
          colors: ['#000000']
        }
      },
      xaxis: {
        categories,
        labels: {
          color: '#FF576B'
        }
      },
      yaxis: {
        axisBorder: {
          show: true
        },
        ...yaxis
      },
      markers: {
        ...markers
      },
      dataLabels: {
        enabled: false
      },
      
      colors: ["#FF576B"],

      stroke: {
        curve: 'straight',
        width: 3,
        colors: ['#FF576B', '#FFE5E9', '#FFFFFF']
      },
      grid: {
        borderColor: `${COLORS['fog-grey']}`,
        strokeDashArray: 10
      },
      plotOptions: {
        area: {
          fillTo: 'origin'
        }
      }
    },

    series: [
      {
        name: '',
        data
      }
    ]
  };
  return (
    <ReactApexChart
      options={dataProps.options}
      series={dataProps.series}
      type={type}
      height={height}
      {...rest}
    />
  );
};

export default AreaChart;
