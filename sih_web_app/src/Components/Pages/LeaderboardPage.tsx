import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../Table/Table";
import Navbar from "../Navbar";
import Footer from "../Footer";
import React from "react";

const LeaderboardPage = () => {
  const [statewise, setStatewise] = useState([]);
  const [clusterwise, setClusterwise] = useState([]);

  useEffect(() => {
    axios.get("http://172.16.103.65:8080/leader").then((response: any) => {
      setStatewise(response.data.statewise);
      setClusterwise(response.data.clusterwise);
      console.log(response.data.clusterwise);
    });
  }, []);
  const get_url = (data) => {
    let url = "state/" + data.id;
    return <a href={url}>{data.state}</a>;
  };
  const get_clust_url = (data) => {
    let url = "cluster/" + data.Clusteridx;
    console.log(data.Clusteridx);
    return <a href={url}>{data.villages[0]}</a>;
  };
  return (
    <>
      <Navbar />
      <div className="conatiner mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="font-semibold text-2xl mb-4">State wise Ranking</h2>

            <Table
              data={statewise}
              columns={[
                {
                  name: "Rank",
                  value: (data, i) => `#${i + 1}`,
                },
                {
                  name: "State",
                  value: (data) => get_url(data),
                },
                {
                  name: "Score",
                  value: (data) =>
                    Math.round((data.score + Number.EPSILON) * 100) / 100,
                },
              ]}
            ></Table>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Cluster wise Ranking
            </h2>

            <Table
              data={clusterwise}
              columns={[
                {
                  name: "Rank",
                  value: (data, i) => `#${i + 1}`,
                },
                {
                  name: "Cluster Id",
                  value: (data, i) => get_clust_url(data),
                },
                {
                  name: "State",
                  value: (data) => data.state,
                },
                {
                  name: "Score",
                  value: (data) =>
                    Math.round((data.score + Number.EPSILON) * 100) / 100,
                },
              ]}
            ></Table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LeaderboardPage;
