import React from 'react'
import {
  DotsHorizontalIcon
} from '@heroicons/react/solid';

export const Post = ({id, post, paginaPost}) => {
  return (
    <div className='p-2 flex cursos-pointer border-b border-red-400'>
      {!paginaPost && (
        <img src={post?.userImg} referrerPolicy="no-referrer" className="p-2 h-12 w-12 rounded-full mr-2" alt=""></img>
      )}
      <div className='flex flex-col space-y-4 w-full'>
        <div className={`flex ${!paginaPost && "justify-between"}`}>
          {paginaPost && (
            <img src={post?.userImg} referrerPolicy="no-referrer" className="p-2 h-12 w-12 rounded-full mr-2" alt=""></img>
          )}
          <div className='text-[#82FF73] text-[16px] sm:text-base mt-0.5'>
            <div className='inline-block group'>
              <h4 className='font-bold text-[15px]'>{post?.username}</h4>
              <h4 className={'font-bold text-[14px] group-hover:underline ${!paginaPost && "inline-block"}'}>@{post?.tag}</h4>
              {!paginaPost && (
                <p className='text-[#DFDFDF]'>{post?.text}</p>
              )}
            </div>
          </div>
          <div className="icon group flex-shrink-0 ml-auto">
            <DotsHorizontalIcon className="h-5 text-[#82FF73] group-hover:text-[#1d9bf0]" />
          </div>
        </div>
        {paginaPost && (
          <p className='text-[#d9d9d9] text-[15px] sm:text-base mt-0.5'>
            {post?.text}
          </p>
        )}
        <img src={post?.image} className="rounded-2xl max-h-[600px] max-w-[600px] mr-2 object-cover"></img>
      </div>
    </div>
  )
}