import React from "react";
import Chart from "react-apexcharts";

const ApexChart = ({ Data,years}) => {
  console.log(years)
  const options = {
    chart: {
      type: "line",
      zoom: {
        enabled: true,
      },
      animations: {
        speed: 1500,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Time Series Score Of Cluster",
      align: "left",
    },
    xaxis: {
      type: "Year",
      categories: years,
    },
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={[
              {
                name: "Score",
                data: Data,
              },
            ]}
            type="line"
            width="95%"
          />
        </div>
      </div>
    </div>
  );
};

export default ApexChart;