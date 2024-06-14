import { DataSource } from "typeorm";
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });  // Load environment variables

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: "FitnessApp"
});

export default dataSource;