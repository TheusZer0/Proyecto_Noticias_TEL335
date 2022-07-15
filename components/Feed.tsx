import { RefreshIcon } from '@heroicons/react/solid'
import { onSnapshot, query, collection, orderBy } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import InputFeed from './InputFeed'
import { useSession } from "next-auth/react";
import {Post} from './Post';


function Feed() {

  const { data: session } = useSession();
  const [posts,setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs as any);
        }
      ),
    [db]
  );

  console.log(posts)


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

       <div className="pb-70">
        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>

    </div>
    
  )
}

export default Feed