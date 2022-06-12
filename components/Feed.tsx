import { RefreshIcon } from '@heroicons/react/solid'
import React from 'react'
import InputFeed from './InputFeed'

function Feed() {
  return (
    <div className="text-white flex-1 border-l border-r
     border-white max-w-screen-2xl sm:ml-[73px] xl:ml-[370px]
     ">
       <div className='text-white flex items-center sm:justify-center
       py-2 px-2 sticky z-50 bg-black border-b border-white'>
         <h1 className='text-lg sm:text-xl font-extrabold'>Noticias Recomendadas:</h1>
         <div className='hoverAnimation w-10 h-10 flex items-center justify-center xl:px-0 ml-auto'>
            <RefreshIcon className='h-8 w-8 cursor-pointer
         text-noticiasTelBlue transition-all duration-500 ease-out hover:rotate-180 active:scale-125'></RefreshIcon>
         </div>
       </div>
       <InputFeed></InputFeed>       
    </div>
    
  )
}

export default Feed