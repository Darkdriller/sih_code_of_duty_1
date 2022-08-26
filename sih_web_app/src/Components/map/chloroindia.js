import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import ReactTooltip from "react-tooltip";
const INDIA_TOPO_JSON = require("./india.topo.json");

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937], // always in [East Latitude, North Longitude]
};

// Red Variants
const COLOR_RANGE = [
  "#ffedea",
  "#ffcec5",
  "#ffad9f",
  "#ff8a75",
  "#ff5533",
  "#e2492d",
  "#be3d26",
  "#9a311f",
  "#782618",
];

const DEFAULT_COLOR = "#EEE";

const geographyStyle = {
  default: {
    outline: "none",
  },
  hover: {
    fill: "#ccc",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
};

// will generate random heatmap data on every call
const getHeatMapData = () => {
  return [
    { id: "AP", state: "Andhra Pradesh", value: 629 },
    { id: "AR", state: "Arunachal Pradesh", value: 883 },
    { id: "AS", state: "Assam", value: 3498 },
    { id: "BR", state: "Bihar", value: 6196 },
    { id: "CT", state: "Chhattisgarh", value: 1951 },
    { id: "GA", state: "Goa", value: 671 },
    { id: "GJ", state: "Gujarat", value: 816 },
    { id: "HR", state: "Haryana", value: 545 },
    { id: "HP", state: "Himachal Pradesh", value: 2561 },
    { id: "JH", state: "Jharkhand", value: 3725 },
    { id: "KA", state: "Karnataka", value: 3913 },
    { id: "KL", state: "Kerala", value: 126 },
    { id: "MP", state: "Madhya Pradesh", value: 7550 },
    { id: "MH", state: "Maharashtra", value: 4181 },
    { id: "MN", state: "Manipur", value: 75 },
    { id: "ML", state: "Meghalaya", value: 1679 },
    { id: "MZ", state: "Mizoram", value: 43 },
    { id: "NL", state: "Nagaland", value: 118 },
    { id: "OD", state: "Odisha", value: 5152 },
    { id: "PB", state: "Punjab", value: 1588 },
    { id: "RJ", state: "Rajasthan", value: 5696 },
    { id: "SK", state: "Sikkim", value: 22 },
    { id: "TN", state: "Tamil Nadu", value: 2275 },
    { id: "TS", state: "Telangana", value: 910 },
    { id: "TR", state: "Tripura", value: 416 },
    { id: "UT", state: "Uttarakhand", value: 967 },
    { id: "UP", state: "Uttar Pradesh", value: 7193 },
    { id: "WB", state: "West Bengal", value: 3 },
    { id: "JK", state: "Jammu and Kashmir", value: 2321 },
  ];
};

function Maps() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [data, setData] = useState(getHeatMapData());

  // const gradientData = {
  //   fromColor: COLOR_RANGE[0],
  //   toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
  //   min: 0,
  //   max: data.reduce((max, item) => (item.value > max ? item.value : max), 0),
  // };

  const colorScale = scaleQuantile()
    .domain(data.map((d) => d.value))
    .range(COLOR_RANGE);

  const onMouseEnter = (geo, current = { value: 1 }) => {
    return () => {
      setTooltipContent(`${geo.properties.name}: ${current.value}`);
    };
  };
  const handleClick = (geo) => () => {
    window.location.href = `/state/IN-${geo}`;
    console.log(geo);
  };

  const onMouseLeave = () => {
    setTooltipContent("");
  };


  return (
    <div className="full-width-height container">
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={600}
        height={220}
        data-tip=""
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              //   console.log(geo.id);
              const current = data.find((s) => s.id === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                  style={geographyStyle}
                  onMouseEnter={onMouseEnter(geo, current)}
                  onMouseLeave={onMouseLeave}
                  onClick={handleClick(geo.id)}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default Maps;
