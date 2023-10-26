import { CustomerStoryComponent } from '../Components/CustomerStoryComponent'
import { FeatureComponent } from '../Components/FeatureComponent'
import { PriceComponent } from '../Components/PriceComponent'
import { VideoComponent } from '../Components/VideoComponent'

export const FrontPage = () => {
  return (
    <>
      <FeatureComponent />
      <PriceComponent />
      <CustomerStoryComponent />
      <VideoComponent />
    </>
  )
}
