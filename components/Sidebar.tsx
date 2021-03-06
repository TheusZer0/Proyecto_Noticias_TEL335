import React from 'react'
import { 
    AdjustmentsIcon,
    HomeIcon,
    AnnotationIcon,
    BookmarkIcon,
    CubeIcon,
    UserIcon,
    DotsHorizontalIcon,
    BellIcon
 } from '@heroicons/react/solid'
import SidebarRow from './SidebarRow'
import Image from 'next/image'
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";



function Sidebar() {
  const { data: session } = useSession();

  return (
      
    <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[330px] p-2 fixed h-full'>        
        
        <div className='flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-20'>
        <Image width={30} height={30} src='https://www.ingemas.cl/imagenes/cliente_usm.png' ></Image>
        </div>       
        
        <div className='space-y-3.5 mt-2 mb-2 xl:ml-20'>

                {/** Boton de Perfil */}
          <div className="text-white flex flex-center justify-center items-center hoverAnimation xl:mt-4 xl:mr-auto ">
          <img src={session?.user?.image} referrerPolicy="no-referrer"
          className=' flex flex-center h-8 w-8 rounded-full xl:mr-2 '  alt=""></img>
          <div className='hidden xl:inline leading-5'>
            <h3 className="font-extrabold">@{session?.user?.tag}</h3>
            <p className="font-bold">{session?.user?.name}</p>
            <div className="group">
            <p className="font-extrabold">Noticias:</p>
            <p className="font-monospace">Escritas = TEST</p>
            <p className="font-monospace">Validadas = TEST</p>
            <p className="font-monospace">In-validas = TEST</p>
            </div>
          </div>
          <DotsHorizontalIcon className='h-4 hidden xl:inline ml-10'></DotsHorizontalIcon>

        </div> 

        <SidebarRow Icon={HomeIcon} title="Inicio" active={true}></SidebarRow>
        <SidebarRow Icon={AdjustmentsIcon} title="Ajustes" active={false}></SidebarRow>
        <SidebarRow Icon={BellIcon} title="Notificaciones" active={false}></SidebarRow>
        <SidebarRow Icon={BookmarkIcon} title="Guardados" active={false}></SidebarRow>
        <SidebarRow Icon={UserIcon} title="Logout" active={false}></SidebarRow>
        <SidebarRow Icon={CubeIcon} title="Test" active={false}></SidebarRow>
        </div>
    
    </div>

  )
}


export default Sidebar