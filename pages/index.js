import styles from '../styles/Home.module.css'
import structureJson from '../data'
import { CardSlider } from '../components/CardSlider'
import { BannerSlider } from '../components/bannerSlider'


export default function Home() {
  return (
    <div className={styles.container}>
      {structureJson.map((data, index) => {
        return (
          <div key={index}>
            {
              data.containerType === "BannerSlider" && <BannerSlider data={data} />
            }
            {
              data.containerType === "CardSlider" && <CardSlider data={data} />
            }
          </div>
        )
      })}
    </div>
  )
}