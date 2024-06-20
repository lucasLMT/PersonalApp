import { DataSource } from "typeorm";

export async function testConnection(dataSource: DataSource) {
  try {
    await dataSource.initialize();
    if (dataSource.isInitialized) {
      return "Connection to database successful!";
    }
    await dataSource.destroy(); // Close the connection
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
    return String(error);
  }
}
