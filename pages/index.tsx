import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Noticias Tel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        {/* Mi Sidebar */}

        <Sidebar></Sidebar>

        {/* Mi Feed */}

        {/* Mi Wigdets */}

        {/* Mi Perfil */}


      </main>

    </div>
  )
}

export default Home
