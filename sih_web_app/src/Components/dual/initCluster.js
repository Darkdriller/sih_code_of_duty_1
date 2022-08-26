import React from 'react'

function InitCluster(Data) {
    {console.log(Data.Data)}
  return (
   
    <ul class="list-disc">
        <li>
      This is the Information regarding Cluster which
      contains the Following Gram Panchayatas:{" "}
      {Data.Data.time_series[0].villages.map((item, index) => {
        return <b>{(index ? ", " : "") + item}</b>;
      })}{" "}
      from {Data.Data.time_series[0].district} district of{" "}
      {Data.Data.time_series[0].state}.
    </li>
    <li>
      The line graph shows the score of the Cluster from
      the years 2016 to 2021.
    </li>
    <li>
      The score is calculated by taking a weighted average
      of the ammeneties in the cluster. The cluster is
      formed on the basis of how near they are to one
      another.
    </li>
    <li>
      These Ammeneties include System of Storage Sources,
      Electricity-Industrial Connection, Hospital Beds,
      Total Number of Doctors, Govt. Secondary Schools,
      Govt. Colleges, Co-operative Bank, Fire Fighting
      Service and so on. Some of the ammeneties are shown
      below.
    </li>
  </ul>
  )
}

export default InitCluster