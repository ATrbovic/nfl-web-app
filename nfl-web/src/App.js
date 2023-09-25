import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
//d3.js solution
//import FootballField from './components/footballField';
import FootballField from './components/newfootballField';

//Control Panel drop down menu

function transformDataForVisualization(data) {

  //test
  console.log("Data at start of transformation: ", data);

  // Group data by frameId
  //const width = 1000;
  const groupedByFrame = d3.group(data, d => d.frameId)
  
  //.sacleLinear().domain([0, d3.max(data)]).range([0, width]); // Output range (typically screen or SVG width);

  // Transform data
  const transformedData = Array.from(groupedByFrame.entries()).map(([frameId, entries]) => {
      let frameData = {
          frameId: frameId,
          players: [],
          football: null
      };

      entries.forEach(entry => {
          if (entry.team !== 'football') {
              frameData.players.push({
                  x: +entry.x,
                  y: +entry.y,
                  jerseyNumber: entry.jerseyNumber,
                  team: entry.team,
                  nflId: entry.nflId
              });
          } else {
              frameData.football = {
                  x: +entry.x,
                  y: +entry.y
              };
          }
      });

      return frameData;
  });

  return transformedData;
}

function App() {
    const [playData, setPlayData] = useState(null);
    useEffect(() => {
        d3.csv('/playersData.csv').then(data => {
            console.log(data);
            
          const cleanedData = data.map(d => {
            console.log(d);
            return {
                gameId: d.gameId ? d.gameId.trim() : undefined,
                playId: d.playId ? d.playId.trim() : undefined,
                frameId: d.frameId ? d.frameId.trim() : undefined,
                team: d.team ? d.team.trim() : undefined,
                nflId: d.nflId ? d.nflId.trim() : undefined,
                jerseyNumber: d.jerseyNumber ? d.jerseyNumber.trim() : undefined,
                x: d.x ? d.x.trim() : undefined,
                y: d.y ? d.y.trim() : undefined
            }
        });

            console.log("Raw Data: ", data);
            console.log("Cleaned Data: ", cleanedData);
            

            // Filter data for a specific game and play (original data)
            //const specificPlayData = data.filter(d => d.gameId === "2021090900" && d.playId === "97");

            //testing purposes
            data = data.filter(d => d && d.gameId && d.playId && d.nflId && d.frameId && d.jerseyNumber && d.team && d.playDirection && d.x && d.y &&
                d.s && d.a && d.dis && d.o && d.dir && d.event && d.possessionTeam && d.defensiveTeam && d.pssResult && d.gameDate && d.homeTeamAbbr && d.visitorTeamAbbr );  // Filter out rows where essential fields are falsy
            const specificPlayData = cleanedData.filter(d => d.gameId === "2021090900" && d.playId === "97");
            //const specificPlayData = cleanedData.filter(d => d.gameId === "2021090900" && d.playId === "97");


            // Transform data for visualization
            const transformedData = transformDataForVisualization(specificPlayData);
            setPlayData(transformedData);

            //Non transfomred data

            //testing purposes
            // console.log(transformedData);
            // console.log(playData);
            
        });
    }, []);

    return (
        <div className="App">
            <h1>Welcome to Our Football Visualization</h1>
            {playData && <FootballField frames={playData} />}
            
        </div>
    );
}

export default App;
//{playData && <FootballField frames={playData} />}