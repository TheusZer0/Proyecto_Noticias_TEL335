import { SearchIcon } from '@heroicons/react/solid'
import React from 'react'

function Widgets() {
  return (
    <div className='px-4 mt-4'>
        <div className='flex items-center space-x-2 
        bg-gray-100 p-3 rounded-full'>
            <SearchIcon className='h-5 w-5'></SearchIcon>
            <input type="text" placeholder='Busca una Noticia' 
            className='flex-1 outline-none bg-trasparent'></input>
        </div>
    </div>
  )
}

export default Widgets