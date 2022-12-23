import * as d3 from "d3";
import { IAirlineInfo, ICityInfo, IMapObject } from "../../lib/interfaces";
import React from "react";
import { useState, useEffect, useMemo, useRef } from "react";
import { GeoGeometryObjects, GeoPermissibleObjects, GeoProjection } from "d3";
import "./index.less";

const Map: React.FC<{
  mapPath: string;
  width: number;
  height: number;
  central: number[];
  projectionMode: string;
}> = ({
  mapPath = "../../data/map.json",
  width = 1000,
  height = 800,
  central = [0, 0],
  projectionMode = "m",
}) => {
  const [map, setMap] = useState<any>();
  const [projection, setProjection] = useState<GeoProjection>();

  const svgRef = useRef<SVGSVGElement>(null);

  const svg = d3
    .select(svgRef.current)
    .attr("width", width)
    .attr("height", height);

  const mapGraph = svg?.append("g").attr("class", "map");
  const marker = svg
    ?.append("defs")
    .append("marker")
    .append("marker")
    .attr("id", "pointers")
    .attr("viewBox", "0 0 12 12")
    .attr("markerWidth", "12")
    .attr("markerHeight", "12")
    .attr("orient", "auto")
    .attr("markerUnits", "strokeWidth")
    .attr("refX", "6")
    .attr("refY", "6");

  marker
    ?.append("circle")
    .attr("class", "innerPointer")
    .attr("cx", "6")
    .attr("cy", "6")
    .attr("r", "3");

  marker
    ?.append("circle")
    .attr("class", "outerPointer")
    .attr("cx", "6")
    .attr("cy", "6")
    .attr("r", "5");

  // set the map data
  useEffect(() => {
    d3.json(mapPath).then(data => {
      setMap(data);
    });
  }, [mapPath]);

  // set the projection
  useEffect(() => {
    // if projectionMode is 'm', use mercator projection
    if (projectionMode === "m") {
      // check if the map is loaded
      if (map) {
        setProjection(
          d3.geoMercator().fitExtent(
            [
              [0, 0],
              [width, height],
            ],
            map
          )
        );
      }
    } else {
      // if projectionMode is 'p', use projection
      // check if the map is loaded
      if (map) {
        setProjection(
          d3.geoOrthographic().fitExtent(
            [
              [0, 0],
              [width, height],
            ],
            map
          )
        );
      }
    }
  }, [map, central, width, height]);

  // draw the mapGraph
  useEffect(() => {
    if (map && projection) {
      const path: any | GeoPermissibleObjects = d3
        .geoPath()
        .projection(projection);
      mapGraph
        ?.selectAll("path")
        .data(map.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("class", "country");
    }
  }, [map, projection]);

  return (
    <div className="main">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Map;
