import React from 'react'
import { 
    AdjustmentsIcon,
    HomeIcon,
    AnnotationIcon,
    BookmarkIcon,
    CubeIcon
 } from '@heroicons/react/solid'
import SidebarRow from './SidebarRow'



function Sidebar() {
  return (
    <div>
        
        <img className='h-6 w-30' src='https://pasaporte.usm.cl/id/img/usmLogo.png' alt=''></img>
        <SidebarRow Icon={HomeIcon} title="Inicio"></SidebarRow>
        <SidebarRow Icon={AdjustmentsIcon} title="Ajustes"></SidebarRow>
        <SidebarRow Icon={AnnotationIcon} title="Mensajes"></SidebarRow>
        <SidebarRow Icon={BookmarkIcon} title="Guardados"></SidebarRow>
        <SidebarRow Icon={CubeIcon} title="Test"></SidebarRow>


    </div>


  )
}

export default Sidebar