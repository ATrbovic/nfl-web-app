//Function to change the speed think youtube .25, .50 etc etc
//Provide four buttons to change speed vaue .25 .50 1x 2x
//Drop down menus to choose year, game, play

//Add FSU, NSF, Industrial engineering logo to header/sponsors
//think about how to process files as images

import React, { useEffect, useState, useRef } from 'react';
import p5 from 'p5';

const FootballField = ({ frames }) => {
  const myP5 = useRef();
  const [speed, setSpeed] = useState(1);  // New state variable

  const [year, setYear] = useState('');  // New state for year
  const [homeTeam, setHomeTeam] = useState('');  // New state for home team
  const [awayTeam, setAwayTeam] = useState('');  // New state for away team
  const [play, setPlay] = useState('');  // New state for play

  const [isPlaying, setIsPlaying] = useState(true); // State for play/pause

  const [currentFrame, setCurrentFrame] = useState(0);// State for current frame

  useEffect(() => {
    let mySketch = (p) => {
      let currentFrame = 0;

      p.setup = () => {
        p.frameRate(30);
        p.createCanvas(1000, 800);
      };
      p.draw = () => {
        if (isPlaying) { // Check if the animation should play
          p.background(255); 
          p.text('Frame rate: '+ Math.floor(p.getFrameRate()), 95, 500);
      
          // Adjust frameRate based on speed
          p.frameRate(30 * speed);
      
          const frameData = frames[currentFrame];
          if (frameData) {
            // Scale x and y coordinates
            const xScale = (x) => p.map(x, 0, 100, 0, 1000);
            const yScale = (y) => p.map(y, 0, 100, 0, 800);
      
            // Draw players
            frameData.players.forEach(d => {
              if (d.team === 'TB') {
                p.fill('blue');
                p.ellipse(xScale(d.x), yScale(d.y), 10, 10);
                p.text(d.jerseyNumber, xScale(d.x), yScale(d.y) - 7);
              } else {
                p.fill('red');
                p.ellipse(xScale(d.x), yScale(d.y), 10, 10);
                p.text(d.jerseyNumber, xScale(d.x), yScale(d.y) - 7);
              }
            });
      
            // Draw football
            if (frameData.football) {
              p.fill('brown');
              p.ellipse(xScale(frameData.football.x), yScale(frameData.football.y), 6, 6);
            }
          }
          currentFrame = (currentFrame + 1) % frames.length;
        }
      };
      
      p.saveImage = () => {
        p.saveCanvas(`frame_${currentFrame}.jpg`, 'jpg');
      };
    };

    myP5.current = new p5(mySketch);
    return () => { myP5.current.remove(); };
  }, [frames, speed, isPlaying]);  // Add speed to dependency list

  //save image function
  const handleSaveImage = () => {
    myP5.current.saveImage();
  };

  //play pause function
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying); // Toggle between play and pause
  };

  return (
    <div>
      {/* Play/Pause Button */}
      <button onClick={togglePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>

      {/* Save Image Button */}
      <button onClick={handleSaveImage}>Save Image</button>

      {/* Speed Control Buttons */}
      <button onClick={() => setSpeed(0.25)}>0.25x</button>
      <button onClick={() => setSpeed(0.5)}>0.5x</button>
      <button onClick={() => setSpeed(1)}>1x</button>
      <button onClick={() => setSpeed(2)}>2x</button>

      {/* Dropdown for Year */}
      <select value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="">Select Year</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        {/* Add more years as needed */}
      </select>

      {/* Dropdown for Home Team */}
      <select value={homeTeam} onChange={(e) => setHomeTeam(e.target.value)}>
        <option value="">Select Home Team</option>
        <option value="TB">TB</option>
        <option value="DAL">DAL</option>
        {/* Add more teams as needed */}
      </select>

      {/* Dropdown for Away Team */}
      <select value={awayTeam} onChange={(e) => setAwayTeam(e.target.value)}>
        <option value="">Select Away Team</option>
        <option value="TB">TB</option>
        <option value="DAL">DAL</option>
        {/* Add more teams as needed */}
      </select>

      {/* Dropdown for Play */}
      <select value={play} onChange={(e) => setPlay(e.target.value)}>
        <option value="">Select Play</option>
        <option value="play1">Play 1</option>
        <option value="play2">Play 2</option>
        {/* Add more plays as needed */}
      </select>

      {/* p5.js will attach canvas here */}
    </div>
  );
};

export default FootballField;

