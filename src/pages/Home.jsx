import Carousel from '../components/Carousel'

import FamousDiscoverers from '../components/FamousDiscoverers'
import UserContributions from '../components/UserContributions'
import ArtifactTimeline from '../components/UserContributions'
// import TabCategories from '../components/TabCategories'

const Home = () => {
  return (
    <div>
      <Carousel />
      {/* <TabCategories /> */}
      <UserContributions></UserContributions>
      <FamousDiscoverers></FamousDiscoverers>
    </div>
  )
}

export default Home
