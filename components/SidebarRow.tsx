import React, { SVGProps } from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
    active: boolean
}

function SidebarRow({Icon, title, active}: Props) {
  return (
    <div className='flex items-center rounded-full justify-center xl:justify-start text-xl space-x-2 px-2 py-2 hover:bg-noticiasTelGreen text-white cursor-pointer transition-all duration-200 group'>
        <Icon color='white' className='h-8 w-8 text-white'></Icon>
        <span className='hidden xl:inline group-hover:text-noticiasTelBlue'>{title}</span>


    </div>
  )
}

export default SidebarRow