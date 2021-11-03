import type { NextPage } from 'next'
import Head from 'next/head'
import { HomeScreen } from '../components/HomeScreen'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>O Tamanho do Amor</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeScreen/>
    
    </div>
  )
}

export default Home
