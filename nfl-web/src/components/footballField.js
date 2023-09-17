// components/FootballField.js
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function FootballField({ data }) {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    // ... your D3 visualization code here ...
  svg.selectAll(".home-player")
    .data(data.home)
    .enter()
    .append("circle")
    .attr("class", "home-player")
    .attr("r", 5) // or any suitable size
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("fill", "blue");

  svg.selectAll(".home-player")
    .data(data.home)
    .attr("cx", d => d.x)
    .attr("cy", d => d.y);

  svg.selectAll(".home-player")
    .data(data.home)
    .enter()
    .append("text")
    .text(d => d.jersey)
    .attr("x", d => d.x)
    .attr("y", d => d.y)
    .attr("fill", "white");

  // Similarly for the guest team (change the class and fill color)

  // For the football
  svg.selectAll(".football")
    .data([data.football])
    .enter()
    .append("circle")
    .attr("class", "football")
    .attr("r", 3)
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("fill", "brown");

  svg.selectAll(".football")
    .data([data.football])
    .attr("cx", d => d.x)
    .attr("cy", d => d.y);

  }, [data]);

  return <svg ref={svgRef} width={800} height={400} />;
}

export default FootballField;
