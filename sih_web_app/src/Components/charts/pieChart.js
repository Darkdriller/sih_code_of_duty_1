import Chart from "react-apexcharts";



function PieChart({Data}) {
    const options = { labels: ["Clusters A", "Cluster B", "CLuster C","Cluster D"] };
    return (
            <Chart
              options={options}
              series={Data.map((data) => data)}
              type="donut"
              width="300"
            />
    );
}

export default PieChart