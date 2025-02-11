import { Helmet } from 'react-helmet'
import Carousel from '../components/Carousel'
import FamousDiscoverers from '../components/FamousDiscoverers'
import FeaturedArtifacts from '../components/FeaturedArtifacts'
import UserContributions from '../components/UserContributions'
import Newsletter from '../components/NewsLetter'


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Artifact Atlas</title>
      </Helmet>
      <Carousel />
      <FeaturedArtifacts></FeaturedArtifacts>
      <UserContributions></UserContributions>
      <FamousDiscoverers></FamousDiscoverers>
      <Newsletter/>
    </div>
  )
}

export default Home
