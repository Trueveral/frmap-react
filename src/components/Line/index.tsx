import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

const Line: React.FC<{
  pf: number[];
  pt: number[];
  distance: number;
  speed: number;
}> = ({ pf, pt, distance, speed }) => {
  /**
   * create a line from pf to pt, with a marker at the end of the line.
   * the line should be animated, and the marker should move along the line.
   *
   */

  const svg = d3.select(".main svg");
  const line = svg.append("g").attr("class", "line");
  


  
