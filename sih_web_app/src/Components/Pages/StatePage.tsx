import { useParams } from "react-router-dom";
import Table from "../Table";
import Navbar from "../Navbar";
const React = require("react");
const useFetch = require("react-fetch-hook");
const get_clust_url = (data) => {
  let url = "/cluster/" + data.Clusteridx;
  return <a href={url}>Cluster #{data.Clusteridx}</a>;
};
const StatePage = () => {
  const id = useParams();
  const { data, error } = useFetch("http://localhost    :8080/state", {
    method: "post",
    headers: { Accept: "application/json" },
    body: id.id,
    credentials: "same-origin",
  });
  if (error) return <p>There is an error.</p>;
  if (!data) return <p>Loading...</p>;
  console.log(data);
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold">{data.state}</h1>

        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="flex justify-center flex-col items-center p-4 border border-gray-700">
            <div>Number of Districts</div>
            <div className="mt-2 text-3xl font-semibold">
              {data.no_districts}
            </div>
          </div>

          <div className="flex justify-center flex-col items-center p-4 border border-gray-700">
            <div>Panchayath clustered</div>
            <div className="mt-2 text-3xl font-semibold">57</div>
          </div>

          <div className="flex justify-center flex-col items-center p-4 border border-gray-700">
            <div>Number of Clusters</div>
            <div className="mt-2 text-3xl font-semibold">
              {data.no_clusters}
            </div>
          </div>

          <div className="flex justify-center flex-col items-center p-4 border border-gray-700">
            <div>All India rank in Cluster Potential</div>
            <div className="mt-2 text-3xl font-semibold">{data.rank}</div>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-semibold mb-2">Cluster Rankings</h2>

          <Table
            data={data.state_data}
            columns={[
              {
                name: "Rank",
                value: (data, i) => `#${i + 1}`,
              },
              {
                name: "Cluster Id",
                value: (data) => get_clust_url(data),
              },
              {
                name: "Score",
                value: (data) => data.score,
              },
            ]}
          ></Table>
        </div>
      </div>
    </>
  );
};

export default StatePage;
