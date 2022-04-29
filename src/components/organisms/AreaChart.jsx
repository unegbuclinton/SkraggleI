import { COLORS } from "constants/colors";
import React from "react";
import ReactApexChart from "react-apexcharts";

const AreaChart = ({ data, categories, type, ...rest }) => {
  const dataProps = {
    options: {
      responsive: [{
        breakpoint: undefined,
        options: {},
    }],
      chart: {
        toolbar: {
          show: false,
          redrawOnParentResize: true
        },
        colors: ["#FF576B"],
        fill: {
          colors: ["#000000"],
        },
      },
      xaxis: {
        categories,
        labels: {
          color: "#E6EFF1",
        },
      },
      dataLabels: {
        enabled: false,
      },

      colors: ["#578EC1"],

      stroke: {
        curve: "straight",
        width: 3,
        colors: ["#FF576B", "#FFE5E9", "#FFFFFF"],
      },
      grid: {
        borderColor: `${COLORS["fog-grey"]}`,
        strokeDashArray: 10,
      },
      plotOptions: {
        area: {
          fillTo: "origin",
        },
      },
    },

    series: [
      {
        name: "series-1",
        data,
      },
    ],
  };
  return (
    <ReactApexChart
      options={dataProps.options}
      series={dataProps.series}
      type={type || "area"}
      height={350}
      {...rest}
    />
  );
};

export default AreaChart;
