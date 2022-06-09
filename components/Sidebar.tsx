import React from 'react'
import { 
    AdjustmentsIcon,
    HomeIcon,
    AnnotationIcon,
    BookmarkIcon,
    CubeIcon,
    UserIcon
 } from '@heroicons/react/solid'
import SidebarRow from './SidebarRow'



function Sidebar() {
  return (
      
    <div className='flex flex-col'>        
        <img className='h-12 w-14' src='https://www.ingemas.cl/imagenes/cliente_usm.png' alt=''></img>
        <SidebarRow Icon={HomeIcon} title="Inicio"></SidebarRow>
        <SidebarRow Icon={AdjustmentsIcon} title="Ajustes"></SidebarRow>
        <SidebarRow Icon={AnnotationIcon} title="Mensajes"></SidebarRow>
        <SidebarRow Icon={BookmarkIcon} title="Guardados"></SidebarRow>
        <SidebarRow Icon={UserIcon} title="Log-In"></SidebarRow>
        <SidebarRow Icon={CubeIcon} title="Test"></SidebarRow>


    </div>


  )
}

export default Sidebar