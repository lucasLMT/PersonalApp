import express from 'express';
//import dataSource from "./infrastructure/database.js";
import { testConnection } from './presentation/controllers/healthCheckController.js'
import dotenv from 'dotenv';
import { DataSource } from "typeorm";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../../.env') });  // Load environment variables

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB
});

const app = express();

app.get('/', async (req, res) => {
  res.status(200).json({username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    path: path.resolve(__dirname, '../../.env')})
})

// Route to check database connection
app.get('/check-database', async (req, res) => {
  try {
    let message = await testConnection(dataSource)
    res.status(200).json({message: message})
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error connecting to database' })
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});