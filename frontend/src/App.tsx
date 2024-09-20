import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, RouterProvider 
} from 'react-router-dom'
import './App.css'
import Home from './components/home'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
      </Route>
    )
  )

  return (
    <div className='App bg-gray-100'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
