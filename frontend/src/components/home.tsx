import MainNavBar from './mainNavBar'
import Treino from './treino'

const Home = () => {
    return (
      <>
        <div className="main mb-12">
          <Treino/>
        </div>
        <MainNavBar />
      </>  
    )
}

export default Home