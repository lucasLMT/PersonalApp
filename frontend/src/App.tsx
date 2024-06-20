import { FC, useState } from 'react';
import axios from 'axios'
import './App.css'

const baseUrl = 'http://localhost:3000';

const App: FC = () => {
  const [database, setDatabase] = useState<string>("");

  async function checkDatabase () {
    const response = await axios.get(`${baseUrl}/check-database`);
    setDatabase(response.data);
  }

  return (
    <>
      <h1>Personal App</h1>
      <button onClick={checkDatabase}>Check Database</button>
      <p>{database}</p>
    </>
  )
}

export default App
