import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

function FootballField() {
  const svgRef = useRef();
  const [data, setData] = useState({ home: [], guest: [], football: {} });

  // Fetch the data
  useEffect(() => {
    d3.csv("/playersData.csv").then((loadedData) => {
      let homeData = [];
      let guestData = [];
      let footballData = {};

      loadedData.forEach(d => {
        d.x = +d.x; // Convert to number
        d.y = +d.y; // Convert to number

        if (d.team === "home") homeData.push(d);
        else if (d.team === "guest") guestData.push(d);
        else if (d.team === "football") footballData = d;
      });

      setData({ home: homeData, guest: guestData, football: footballData });
    });
  }, []);

  // Visualize the data
  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Home Players
    const homePlayers = svg.selectAll(".home-player")
      .data(data.home);
      
    homePlayers.enter()
      .append("circle")
      .attr("class", "home-player")
      .attr("r", 5)
      .attr("fill", "blue")
      .merge(homePlayers)
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

    homePlayers.exit().remove();

    const homeText = svg.selectAll(".home-text")
      .data(data.home);
      
    homeText.enter()
      .append("text")
      .attr("class", "home-text")
      .attr("fill", "white")
      .merge(homeText)
      .text(d => d.jersey)
      .attr("x", d => d.x)
      .attr("y", d => d.y - 7);

    homeText.exit().remove();

    // Guest Players
    const guestPlayers = svg.selectAll(".guest-player")
      .data(data.guest);

    guestPlayers.enter()
      .append("circle")
      .attr("class", "guest-player")
      .attr("r", 5)
      .attr("fill", "red")
      .merge(guestPlayers)
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

    guestPlayers.exit().remove();

    // Football
    const football = svg.selectAll(".football")
      .data([data.football]);

    football.enter()
      .append("circle")
      .attr("class", "football")
      .attr("r", 3)
      .attr("fill", "brown")
      .merge(football)
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

    football.exit().remove();

  }, [data]);

  return <svg ref={svgRef} width={800} height={400} />;
}

export default FootballField;
