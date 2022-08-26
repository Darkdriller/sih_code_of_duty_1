import React from 'react'
import PieChart from '../charts/pieChart'
function SmartAnalysis(Data) {
  return (<div>
    <PieChart Data={[626,9237,16241,37961]} />
    This Pie Chart Shows the Different Classes of Cluster.

    The Cluster A is highest growth potentional and all Cluster D is lowest Growth Potential.

    This Cluster has the Cluster Label {(Data.Data)}

    </div>
  )
}

export default SmartAnalysis