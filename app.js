// Import express dan pg
import express from 'express';
import { default as pool } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors());

app.get('/food', async (_req, res) => {
  try {
    const result = await pool.query('SELECT id,name,price,id_recipe,url FROM foot');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching foot');
  }
});

// Route untuk menambah user
app.get('/food/:id', async (req, res) => {
  try {
    const result = await pool.query(`select f.name,f.price,f.url,p.materials from foot f
inner join recipe p ON p.id = f.id_recipe
where f.id = ${req.params.id}`);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding foot');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
