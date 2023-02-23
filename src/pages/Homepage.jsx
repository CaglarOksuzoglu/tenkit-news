import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Search from '../components/Search.jsx'
import Horizon from '../components/Horizon.jsx'
import Results from '../components/Results/Results.jsx'

const Homepage = () => {
  return (
    <div className='homepage-main-content'>
      <Header />
      <Search />
      <Horizon />
      <Results />
      <Footer />
    </div>
  )
}

export default Homepage
