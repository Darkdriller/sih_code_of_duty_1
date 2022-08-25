import React from "react";
import Chart from "react-apexcharts";

const apexChart = ({ Data }) => {
  const options = {
    chart: {
      height: "80%",
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
      categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
    },
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          {console.log(Data)}
          <Chart
            options={options}
            series={[
              {
                name: "Score",
                data: Data,
              },
            ]}
            type="line"
            width="90%"
          />
        </div>
      </div>
    </div>
  );
};

export default apexChart;