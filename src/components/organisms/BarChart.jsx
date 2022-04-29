import React from "react";
import Chart from "react-apexcharts";

const BarChart = ({series,categories,width,height}) => {
  return (
    <>
      <Chart
        type="bar"
        width={width}
        height={height}
        series={series}
        
        options={{
          xaxis:{
            categories,
          },
          chart:{
            width: '100%',
            redrawOnParentResize: true
          },
        }}
      ></Chart>
    </>
  );
};

export default BarChart;
