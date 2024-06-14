import { DataSource } from "typeorm";
import dataSource from "../../infrastructure/database";

async function testConnection(dataSource: DataSource) {
  try {
    await dataSource.initialize();
    console.log("Connection to database successful!");
    await dataSource.destroy(); // Close the connection
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

testConnection(dataSource);