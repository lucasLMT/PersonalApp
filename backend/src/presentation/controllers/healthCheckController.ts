import { DataSource } from 'typeorm';

export default async function testConnection(dataSource: DataSource) {
  try {
    await dataSource.initialize()
    if (dataSource.isInitialized) {
      return 'Connection to database successful!'
    }
  } catch (error) {
    if (error instanceof Error) {
      return error.message
    }
    return String(error)
  } finally {
    await dataSource.destroy() // Close the connection
  }
}
