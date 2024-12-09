// Import express dan pg
import express from 'express';
import { default as pool } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

// Inisialisasi express app
const app = express();
const port = process.env.PORT ?? 3000;

// Middleware untuk parse JSON request body
app.use(express.json());
app.use(cors());

// Route untuk mendapatkan daftar user
app.get('/foot', async (req, res) => {
  try {
    const result = await pool.query('SELECT id,name,price,id_recipe,url FROM foot');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching foot');
  }
});

// Route untuk menambah user
app.post('/foot', async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *',
      [name, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding user');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
