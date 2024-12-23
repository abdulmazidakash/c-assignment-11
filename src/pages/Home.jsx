import Carousel from '../components/Carousel'
import FamousDiscoverers from '../components/FamousDiscoverers'
import UserContributions from '../components/UserContributions'


const Home = () => {
  return (
    <div>
      <Carousel />
      <UserContributions></UserContributions>
      <FamousDiscoverers></FamousDiscoverers>
    </div>
  )
}

export default Home
