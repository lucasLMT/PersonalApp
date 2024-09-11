import {
  Typography
} from '@material-tailwind/react'
import MainNavBar from './mainNavBar'
import Treino from './treino'

const Home = () => {
    return (
      <>
        <div className="main mb-5">
          <Typography variant="h3" className='text-center'>Treino</Typography>
          <Treino/>
        </div>
        <MainNavBar />
      </>  
    )
}

export default Home