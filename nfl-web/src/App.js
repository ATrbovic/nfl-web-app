import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import FootballField from './components/footballField';

function transformDataForVisualization(data) {

  //test
  console.log("Data at start of transformation: ", data);

  // Group data by frameId
  const groupedByFrame = d3.group(data, d => d.frameId);

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
          const cleanedData = data.map(d => {
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

            // Filter data for a specific game and play
            const specificPlayData = data.filter(d => d.gameId === "2021090900" && d.playId === "97");

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
