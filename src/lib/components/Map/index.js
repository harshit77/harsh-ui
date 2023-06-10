import React from "react";
import PropTypes from "prop-types";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import CustomIcon from "../CustomIcon";
import geoURL from "./worldMap.json";
import Tooltip from "../Tooltip";

const Map = ({
  markers,
  icon,
  projectionConfig = {
    center: [0, 50],
    scale: 100,
  },
  width = 1200,
  height = 500,
  toolTip = false,
}) => {
  let ParentComponent = React.Fragment,
    elementSpecificProp;
  if (toolTip) {
    ParentComponent = Tooltip;
    elementSpecificProp = { position: "auto" };
  }

  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={projectionConfig}
      width={width}
      height={height}
    >
      <Geographies geography={geoURL}>
        {({ geographies }) =>
          geographies.map((geo, index) => (
            <Geography
              key={index}
              geography={geo}
              style={{
                default: {
                  fill: "rgb(var(--harsh-ui-dark-80))",
                  stroke: "rgb(var(--harsh-ui-border-70))",
                },
                hover: {
                  stroke: "rgb(var(--harsh-ui-secondary))",
                },
              }}
            />
          ))
        }
      </Geographies>
      {markers.map(({ content, coordinates, ...otherMarkProps }, index) => (
        <ParentComponent
          {...elementSpecificProp}
          content={toolTip && content}
          key={index}
        >
          <Marker name={index} coordinates={coordinates}>
            <CustomIcon {...otherMarkProps} icon={icon} />
          </Marker>
        </ParentComponent>
      ))}
    </ComposableMap>
  );
};

Map.propTypes = {
  markers: PropTypes.array,
  icon: PropTypes.element,
  projectionConfig: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  toolTip: PropTypes.bool,
};

export default Map;
