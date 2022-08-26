// import logo from './logo.svg';
import "./App.css";
import React from "react";
// import Navbar from "./components/Navbar";
// import Cluster from "./components/Pages/cluster";
import Cluster from "./Components/Pages/clusterPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/home";
import LeaderboardPage from "./Components/Pages/LeaderboardPage.tsx";
import MapPage from "./Components/Pages/MapPage.tsx";
import StatePage from "./Components/Pages/StatePage.tsx";
// import SmartAnalysisPage from "./components/Pages/SmartAnalysisPage.tsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          {/*<Route path="/cluster/:id" element={<Cluster/>}/>*/}
          <Route path="/state/:id" element={<StatePage />} />
          {/* <Route path="/smart_analysis" element={<SmartAnalysisPage />} /> */}
          <Route path="/cluster/:id" element={<Cluster />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
