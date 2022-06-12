import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Noticias Tel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-black min-h-screen'>

        {/* Mi Sidebar */}

        <Sidebar></Sidebar>

        {/* Mi Feed */}

        {/** <Feed></Feed>  */}

        {/* Mi Wigdets */}

        {/** <Widgets></Widgets> */}

        {/* Mi Perfil */}


      </main>

    </div>
  )
}

export default Home
