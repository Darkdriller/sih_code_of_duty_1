import { useParams } from "react-router-dom";
import React from "react";
import useFetch from "react-fetch-hook";
// import MapPage from "./MapPage";
import { useEffect, useState } from "react";
import ApexChart from "../charts/apexChart";
import ChartLine from "../charts/ChartLine";
import Footer from "../Footer";
import InfoCard from "../InfoCard";
import InitCluster from "../dual/initCluster"
import SmartAnalysis from "../dual/smartAnalysis";
import amnitiesIncluded from "./amnitiesIncluded.csv"
// import { Icon } from "@material-tailwind/react";
const Cluster = (props) => {
  const id = useParams();
  console.log(id.id);
  const { data, error } = useFetch("http://localhost:8080/Cluster", {
    method: "post",
    headers: { Accept: "application/json" },
    body: id.id,
    credentials: "same-origin",
  });
  const [timeSeries, setTimeSeries] = useState("Time series")
  const HandleClick = () =>
  {
    setTimeSeries(()=>{
        return(timeSeries==="Time series"? "Time series Prediction": "Time series")
    })
  const Download = ()=>{

  }


  }
  const line_data = (data,timeSeries) => {

    const years = ["2016", "2017", "2018", "2019", "2020", "score"];
    const yearsf= timeSeries==="Time series"? years : [...years,"2022","2023","2024","2025","2026","2027","2028","2029","2030","2031"];
    return [yearsf.map(
        (datas) => Math.round((data[0][datas] + Number.EPSILON) * 100) / 100
      ),yearsf.map(function(item) { return item ==="score" ? '2021' : item })];
  };

  if (error) return <p>There is an error.</p>;
  if (!data) return <p>Loading...</p>;
  return (
    <>
      {/* < div class="h-screen-89 fixed top-6 md:left-0 -left-64 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300">
        <Sidebar />
      </div> */}
      <div>

        <div class="bg-cyan-500 px-3 h-40 md:px-8 "></div>
        <div class="px-3 md:px-3 -mt-24">
          <div class="container mx-auto max-w-full">
            <div class="grid grid-cols-1 xl:grid-cols-7">
            <div class="xl:col-start-1 xl:col-end-2 px-3 mb-14">
                <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
                  <div class="bg-gradient-to-tr from-pink-500 to-pink-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8 justify-start shadow-lg-pink undefined">
                    <h6 class="uppercase text-gray-200 text-xs font-medium">
                      Overview
                    </h6>
                    <h2 class="text-white text-2xl">Cluster Info</h2>
                  </div>
                  <div class="p-4 undefined">
                    <div class="relative h-96">
                      <div className="text-justify text-gray-700 text-[15px]">
                        <ul class="list-disc">
                          <li> 
                            This page shows information like the time series value of score, calculation of score
                            and details about some ammeneties in the cluster
                          </li>
                        </ul>
                        {/* <ul>

                        <li className="py-2">
                        <button class="position: relative bottom-0 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={()=>{
                          window.location.href="/"
                        }}>
                            <svg class="px-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

                              <span class="text-xs px-2">Home</span>
                          </button>

                        </li>
                        </ul>
                        
                          
                          <button class="position: relative bottom-0 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={HandleClick}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
</svg>


                              <span class="text-xs">Smart Analysis</span>
                          </button>
                          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
</button> */}


  <button type="button" class="inline-flex items-center py-2 px-3 text-sm font-medium text-gray-900 bg-transparent rounded hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" onClick={()=>{
                          window.location.href="/"
                        }}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
    Home
  </button>
  <button type="button" class="inline-flex items-center py-2 px-3 text-sm font-medium text-gray-900 bg-transparent rounded border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" onClick={HandleClick}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
</svg>
    Analysis
  </button>
  <a class="inline-flex items-center py-2 px-3 text-sm font-medium text-gray-900 bg-transparent rounded hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" href={amnitiesIncluded}>
    <svg aria-hidden="true" class=" w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
    Downloads
  </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:col-start-2 xl:col-end-6 px-4 mb-14">
                <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
                  <div class="bg-gradient-to-tr from-orange-500 to-orange-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8 justify-start shadow-lg-orange undefined">
                    <h6 class="uppercase text-gray-200 text-xs font-medium">
                      Overview
                    </h6>
                    <h2 class="text-white text-2xl">
                    {timeSeries} Value of Score
                    </h2>
                  </div>
                  <div class="p-4 undefined">
                    <div class="relative h-96 px-4">
                      <button onClick={HandleClick}>{timeSeries}</button>
                      {/* <ChartLine Data={line_data(data.time_series)} /> */}
                      {console.log(line_data(data.time_series,timeSeries)[1])}
                      {console.log(data.class_label[0].class)}
                      <ApexChart Data={line_data(data.time_series_pred,timeSeries)[0]} years = {line_data(data.time_series_pred,timeSeries)[1]}/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:col-start-6 xl:col-end-8 px-4 mb-14">
                <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
                  <div class="bg-gradient-to-tr from-pink-500 to-pink-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8 justify-start shadow-lg-pink undefined">
                    <h6 class="uppercase text-gray-200 text-xs font-medium">
                      Overview
                    </h6>
                    <h2 class="text-white text-2xl">Cluster Info</h2>
                  </div>
                  <div class="p-4 undefined">
                    <div class="relative h-96">
                      <div className="text-justify text-gray-700 text-[15px]">
                        {timeSeries==="Time series"?<InitCluster Data={data} /> : <SmartAnalysis Data={data.class_label[0].class}/>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfoCard data={data.Ammeneties[0]} />
      <Footer />
    </>
  );
};

export default Cluster;
