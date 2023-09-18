import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import FootballField from './components/footballField';

function transformDataForVisualization(data) {
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
        d3.csv('/path/to/playersData.csv').then(data => {
            // Filter data for a specific game and play
            const specificPlayData = data.filter(d => d.gameId === "someGameId" && d.playId === "somePlayId");

            // Transform data for visualization
            const transformedData = transformDataForVisualization(specificPlayData);

            setPlayData(transformedData);
        });
    }, []);

    return (
        <div className="App">
            <h1>Welcome to Our Football Visualization</h1>
            {playData && <FootballField data={playData} />}
        </div>
    );
}

export default App;
