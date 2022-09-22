import styles from '../styles/Home.module.css'
import structureJson from '../data'
import { BannerSlider } from '../components/bannerSlider'
import { CardSlider } from '../components/cardSlider'


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