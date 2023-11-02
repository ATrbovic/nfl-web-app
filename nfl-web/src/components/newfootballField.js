//Function to change the speed think youtube .25, .50 etc etc
//Provide four buttons to change speed vaue .25 .50 1x 2x
//Drop down menus to choose year, game, play

//Add FSU, NSF, Industrial engineering logo to header/sponsors
//think about how to process files as images

import React, { useEffect, useState, useRef } from 'react';
import p5 from 'p5';

const FootballField = ({ frames }) => {
  const myP5 = useRef();
  const [speed, setSpeed] = useState(1);
  const [shouldSave, setShouldSave] = useState(false);  // New state to control saving

  const [year, setYear] = useState('');
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [play, setPlay] = useState('');

  useEffect(() => {
    let mySketch = (p) => {
      let currentFrame = 0;

      p.setup = () => {
        p.frameRate(30);
        p.createCanvas(1000, 800);
      };

      p.draw = () => {
        p.background(255); 
        p.text('Frame rate: '+ Math.floor(p.getFrameRate()),95,500);
        p.frameRate(30 * speed);

        const frameData = frames[currentFrame];
        if (frameData) {
          const xScale = (x) => p.map(x, 0, 100, 0, 1000);
          const yScale = (y) => p.map(y, 0, 100, 0, 800);

          // frameData.players.forEach(d => {
          //   if (d.team === 'TB') {
          //     p.fill('blue');
          //     p.ellipse(xScale(d.x), yScale(d.y), 10, 10);
          //     p.text(d.jerseyNumber, xScale(d.x), yScale(d.y) - 7);
          //   } else {
          //     p.fill('red');
          //     p.ellipse(xScale(d.x), yScale(d.y), 10, 10);
          //     p.text(d.jerseyNumber, xScale(d.x), yScale(d.y) - 7);
          //   }
          // });
          frameData.players.forEach(d => {
            const x = xScale(d.x);
            const y = yScale(d.y);
            if (d.team === 'TB' || d.team === 'BUF') {
              p.fill('blue');
            } else {
              p.fill('red');
            }
            p.ellipse(x, y, 20, 20);
          
            // Adjust text alignment and position
            p.fill(255);  // white color for text
            p.textAlign(p.CENTER, p.CENTER);  // center both horizontally and vertically
            p.text(d.jerseyNumber, x, y);
          });
          

          if (frameData.football) {
            p.fill('brown');
            p.ellipse(xScale(frameData.football.x), yScale(frameData.football.y), 9, 6);
          }
        }

        currentFrame = (currentFrame + 1) % frames.length;
        if (shouldSave) {
          p.saveImage();
          setShouldSave(false); // Reset the save flag
        }
      };

      p.saveImage = () => {
        console.log("Saving Image:", `frame_${currentFrame}.jpg`);
        p.saveCanvas(`frame_${currentFrame}.jpg`, 'jpg');
      };
    };

    myP5.current = new p5(mySketch);
    return () => { myP5.current.remove(); };
  }, [frames, speed, shouldSave]);  // Include shouldSave in the dependency list

  const handleSaveImage = () => {
    setShouldSave(true);
  };

  const handleCaptureFrames = () => {
    let captures = 0;
    const captureInterval = setInterval(() => {
      if (captures < 10) {
        setShouldSave(true);
        captures++;
      } else {
        clearInterval(captureInterval);
      }
    }, 100);
  };

  return (
    <div>

      {/* Capture multiple Frames Button */}
      <button onClick={handleCaptureFrames}>Capture 10 Frames</button>

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


