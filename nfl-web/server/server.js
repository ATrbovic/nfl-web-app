const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Establish a connection to your PostgreSQL database
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'nflData',
  password: '3trboboys',
  port: 5432,
});

// API routes

app.get('/api/twenytwoWeekone', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM twenytwoWeekone');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// app.get('/api/frames', async (req, res) => {
//   const gameId = req.query.gameId;
//   try {
//     const result = await pool.query('SELECT * FROM frames WHERE gameId = $1', [gameId]);
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

// Server listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
