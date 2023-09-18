import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

function FootballField({ frames }) {
  const svgRef = useRef();
  const [currentFrame, setCurrentFrame] = useState(0);

  // Cycle through the frames to animate the visualization
  useEffect(() => {
    if (!frames || frames.length === 0) return;

    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 1000);  // adjust timing as necessary to speed up or slow down the animation

    return () => clearInterval(interval);
  }, [frames]);

  //testing purposes
  //console.log(frames);

  
  // Visualize the data
  useEffect(() => {
    if (!frames || frames.length === 0) return;

    const frameData = frames[currentFrame];
    const svg = d3.select(svgRef.current);

    // Home Players
    console.log("Frames data inside FootballField:", frames);
    const homePlayers = svg.selectAll(".home-player")
      //.data(frameData.home);
      .data(frameData.filter(d => d.team === 'TB'));
      
    homePlayers.enter()
      .append("circle")
      .attr("class", "home-player")
      .attr("r", 5)
      .attr("fill", "blue")
      .merge(homePlayers)
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

    homePlayers.exit().remove();

    //testing purposes
    console.log("Frames data inside FootballField:", frames);

    const homeText = svg.selectAll(".home-text")
      //.data(frameData.home);
      .data(frameData.filter(d => d.team === 'TB'));
      
    homeText.enter()
      .append("text")
      .attr("class", "home-text")
      .attr("fill", "white")
      .merge(homeText)
      .text(d => d.jersey)
      .attr("x", d => d.x)
      .attr("y", d => d.y - 7);

    homeText.exit().remove();

    //Testing purposes
    console.log("Frames data inside FootballField:", frames);

    // Guest Players
    const guestPlayers = svg.selectAll(".guest-player")
      //.data(frameData.guest);
      .data(frameData.filter(d => d.team === 'DAL'));

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
      .data([frameData.football]);

    football.enter()
      .append("circle")
      .attr("class", "football")
      .attr("r", 3)
      .attr("fill", "brown")
      .merge(football)
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

    football.exit().remove();

  }, [frames, currentFrame]);

  return <svg ref={svgRef} width={800} height={400} />;
}

export default FootballField;
