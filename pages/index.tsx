import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

import { getProviders, getSession, useSession } from "next-auth/react";
import Login from '../components/Login'

export async function getServerSideProps(context: any) {
  //
  const noticiasMundialesResultados = await fetch("http://api.mediastack.com/v1/news?access_key=2f5ff84fdc267b75e6397120e8a77c60&countries=cl").then(
    (res) => res.json()
  );

  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      noticiasMundialesResultados,
      providers,
      session,
    },
  };
}

const Home: NextPage = (noticiasMundialesResultados,providers) => {

  const { data: session } = useSession()

  if (!session) return <Login providers={providers}></Login>

  return (
    <div className="">
      <Head>
        <title>Noticias Tel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-black min-h-screen flex mx-auto'>

        {/* Mi Sidebar */}

        <Sidebar></Sidebar>

        {/* Mi Feed */}

        <Feed></Feed>

        {/* Mi Wigdets */}

        {/** <Widgets></Widgets> */}

        {/* Mi Perfil */}


      </main>

    </div>
  )
}

export default Home
