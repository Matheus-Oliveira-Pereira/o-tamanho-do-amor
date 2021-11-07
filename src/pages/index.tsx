import type { NextPage } from 'next'
import Head from 'next/head'
import { HomeScreen } from '../components/HomeScreen'
import { Synopsis } from '../components/SynopsisScreen'
import GlobalStyle from '../globalStyles'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>O Tamanho do Amor</title>
        
        <link rel="icon" href="/favicon.ico" />
        <link rel='preload' href='/fonts/GeometricaSans/GeometricaSans-Regular.ttf' as='font' crossOrigin=''/>
        <link rel='preload' href='/fonts/Intro/Intro-Regular.otf' as='font' crossOrigin=''/>
      </Head>
      <GlobalStyle/>
      <HomeScreen/>
      <Synopsis/>
    
    </div>
  )
}

export default Home
