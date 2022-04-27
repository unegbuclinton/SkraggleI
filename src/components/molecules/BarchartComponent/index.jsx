import React from "react";
import BarChart from "components/organisms/BarChart";

function DonationBarchart() {
  const series = [
    {
      name: "Skraggle",
      data: [39, 30, 35, 25, 40, 15, 52, 44, 25, 35, 44, 55],
      color: "#FF6868",
    },
  ];

  return (
    <div>
      <h1>DonationBarchart</h1>
      <BarChart
        series={series}
        categories={[
          "Jan",
          "Feb",
          "Mar",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ]}
        height={385}
        width={600}
      />
    </div>
  );
}

export default DonationBarchart;
