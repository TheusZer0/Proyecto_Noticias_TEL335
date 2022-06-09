import React, { SVGProps } from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
}

function SidebarRow({Icon, title}: Props) {
  return (
    <div className='flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-noticiasTelGreen cursor-pointer transition-all duration-200 group'>
        <Icon className='h-8 w-8'></Icon>
        <p className='group-hover:text-noticiasTelBlue'>{title}</p>


    </div>
  )
}

export default SidebarRow