// const express = require('express') 
// const app = express() 
// app.get('/', (req, res) => res.send('Hello World!')) 
// app.listen(3000, () => console.log('Server ready'))



const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
//   host: process.env.POSTGRES_USER,
  port: 5432,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

app.get("/", (req, res) => {
  res.send("Express is working!");
});

app.get("/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Database connection failed");
  }
});

app.listen(4000, () => {
  console.log("Backend listening on port 4000");
});