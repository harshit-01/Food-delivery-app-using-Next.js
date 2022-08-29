import Head from 'next/head'
import styles from '../styles/main.module.scss'
import Image from 'next/image'
import mypic from '../public/wave2.png'
import FoodCarousel from '../components/FoodCarousel'
import { setCookie,getCookie,hasCookie,deleteCookie  } from 'cookies-next';

export default function Home() {
  // if(hasCookie){
  //   console.log(getCookie('token'))
  // }
  return (
    <div>
      <Head>
        <title>ForFoodie || Epicure</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={styles.container}>
        <Image
          src={mypic}
          height={400}
          alt="Picture of the author"
          layout="responsive"
        />
        <div className={styles.imgTxt}>
          <p> <i style={{color:"#FFDF00"}}>&#9733;</i> Welcome Foodie, order whatever you want at the lowest price.</p>
          <p> <i style={{color:"#FFDF00"}}>&#9733;</i> Save money and avoid delivery fees with a subscription.</p>
        </div>
        <div className={styles.carousel}>
          <FoodCarousel />
        </div>
      </div>
    </div>
  )
}
