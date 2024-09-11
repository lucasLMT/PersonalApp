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
    <div className='App mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
