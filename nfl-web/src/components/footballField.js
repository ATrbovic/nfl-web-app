import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

function FootballField({ frames }) {
  const svgRef = useRef();
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    if (!frames || frames.length === 0) return;

    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 1000);  // adjust timing as necessary

    return () => clearInterval(interval);
  }, [frames]);

  useEffect(() => {
    if (!frames || frames.length === 0) return;

    const frameData = frames[currentFrame];

    //test
    console.log("Frame Data:", frameData);
    
    const svg = d3.select(svgRef.current) ;
    
    const xScale = d3.scaleLinear()
    .domain([0, 100]) // Assuming data x-values are between 0 and 100; modify accordingly
    .range([0, 500]); // SVG width

    const yScale = d3.scaleLinear()
      .domain([0, 100]) // Assuming data y-values are between 0 and 100; modify accordingly
      .range([0, 500]); // SVG height

    // Home Players
    const homePlayers = svg.selectAll(".home-player")
    
    
    homePlayers.enter()
      .append("circle")
      .attr("class", "home-player")
      .attr("r", 5)
      .attr("fill", "red")
      .merge(homePlayers)
      .attr("cx", d => xScale(d.x)) // Use the scale for x
      .attr("cy", d => yScale(d.y));

    homePlayers.exit().remove();

    const homeText = svg.selectAll(".home-text")
      .data(frameData.players.filter(d => d.team === 'TB'));
      
    homeText.enter()
      .append("text")
      .attr("class", "home-text")
      .attr("fill", "blue")
      .merge(homeText)
      .text(d => d.jerseyNumber)
      .attr("x", d => d.x)
      .attr("y", d => d.y - 7);

    homeText.exit().remove();

    //Guest Players
    const guestPlayers = svg.selectAll(".guest-player")
      .data(frameData.players.filter(d => d.team === 'DAL'));

    guestPlayers.enter()
      .append("circle")
      .attr("class", "guest-player")
      .attr("r", 5)
      .attr("fill", "red")
      .merge(guestPlayers)
      // .attr("cx", d => d.x)
      // .attr("cy", d => d.y);
      .attr("cx", d => xScale(d.x)) // Use the scale for x
      .attr("cy", d => yScale(d.y));

    guestPlayers.exit().remove();

    // Football
    const football = svg.selectAll(".football")
      .data([frameData.football]);

    football.enter()
      .append("circle")
      .attr("class", "football")
      .attr("r", 3)
      .attr("fill", "brown")
      .merge(football)
      // .attr("cx", d => d.x)
      // .attr("cy", d => d.y);
      .attr("cx", d => xScale(d.x)) // Use the scale for x
      .attr("cy", d => yScale(d.y));

    football.exit().remove();

  }, [frames, currentFrame]);

  return ( 
  <svg ref={svgRef} width={1000} height={800} >
    
  </svg>
  );
}

export default FootballField;
