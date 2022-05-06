import { COLORS } from 'constants/colors';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const AreaChart = ({
  categories,
  height,
  yaxis,
  markers,
  colors,
  stroke,
  series,
  ...rest
}) => {
  const dataProps = {
    options: {
      chart: {
        type: "area",

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
          color: "#FF576B",
        },
      },
      yaxis: {
        axisBorder: {
          show: true,
        },
        ...yaxis,
      },
      markers: {
        ...markers,
      },
      dataLabels: {
        enabled: false
      },

      stroke: {
        curve: 'straight',
        width: 3,
        colors: ["#FF576B"],
        ...stroke,
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
  };
  return (
    <ReactApexChart
      options={dataProps.options}
      series={series}
      type="area"
      height={height}
      {...rest}
    />
  );
};

export default AreaChart;
