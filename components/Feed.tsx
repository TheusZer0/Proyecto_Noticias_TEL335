import { RefreshIcon } from '@heroicons/react/solid'
import React from 'react'

function Feed() {
  return (
    <div>
        <div className='flex items-center justify-between'>
            <h1 className='p-4 pb-0 text-xl font-extrabold '>Inicio</h1>
        <RefreshIcon className='mr-5 mt-5 h-8 w-8 cursor-pointer
         text-noticiasTelBlue transition-all duration-500 ease-out hover:rotate-180 active:scale-125'></RefreshIcon>
         </div>
    </div>
  )
}

export default Feed