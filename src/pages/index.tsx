import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { HomeScreen } from '../components/HomeScreen'
import {AuthorScreen} from '../components/AuthorScreen'
import { Synopsis } from '../components/SynopsisScreen'
import GlobalStyle from '../globalStyles'
import ParallaxBox from '../components/ParallaxBox'
import Launch from '../components/Launch'
import SliderScreen from '../components/SliderScreen'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home: NextPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
      <Head>
        <title>O Tamanho do Amor</title>      
        <link rel="icon" href="/favicon.ico" />
        <link rel='preload' href='/fonts/GeometricaSans/GeometricaSans-Regular.ttf' as='font' crossOrigin=''/>
        <link rel='preload' href='/fonts/Intro/Intro-Regular.otf' as='font' crossOrigin=''/>
      </Head>
      <HomeScreen/>
      <Synopsis/>
      <SliderScreen/>
      <AuthorScreen/>
      <ParallaxBox/>
      <Launch/>
      <GlobalStyle/>
    </div>
  )
}

export default Home
