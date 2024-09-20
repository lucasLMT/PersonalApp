import MainNavBar from './mainNavBar'
import Treino from './treino'

const Home = () => {
    return (
      <>
        <div className="main mb-12">
          <Treino/>
        </div>
        <div className='w-full max-w-screen-xl mx-auto'>
          <MainNavBar />
        </div>
      </>  
    )
}

export default Home