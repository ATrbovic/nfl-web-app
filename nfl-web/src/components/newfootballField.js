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
      };
    };

    myP5.current = new p5(mySketch);
    return () => { myP5.current.remove(); };
  }, [frames, speed]);  // Add speed to dependency list

  return (
    <div>
      {/* Speed Control Buttons */}
      <button onClick={() => setSpeed(0.25)}>0.25x</button>
      <button onClick={() => setSpeed(0.5)}>0.5x</button>
      <button onClick={() => setSpeed(1)}>1x</button>
      <button onClick={() => setSpeed(2)}>2x</button>

      {/* p5.js will attach canvas here */}
    </div>
  );
};

export default FootballField;
