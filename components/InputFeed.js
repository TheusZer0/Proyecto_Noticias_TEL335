import {
  XIcon,
  CameraIcon
} from '@heroicons/react/solid';
import React from 'react'

import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { useSession } from "next-auth/react";


function InputFeed() {

  const { data: session } = useSession();
  

  const [inputFeed, setInputFeed] = useState("");
  const [cargar, setCarga] = useState(false);
  const [archivoSeleccionado, setArchivoSeleccionado] = useState(null);
  const referenciaImagen = useRef(null);

  const enviarPost = async () => {
    if (cargar) return;
    setCarga(true);

    const docRef = await addDoc(collection(db, "posts"), {
      id: session.user.uid,
      username: session.user.name,
      userImg: session.user.image,
      tag: session.user.tag,
      text: inputFeed,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if (archivoSeleccionado) {
      await uploadString(imageRef, archivoSeleccionado, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      });
    }

    setCarga(false);
    setInputFeed("");
    setArchivoSeleccionado(null);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setArchivoSeleccionado(readerEvent.target.result);
    };
  };

  return (

    <div className={"border-b border-white p-4 flex space-x-4"}>
      <img src={session.user.image}
        className=' flex flex-center h-8 w-8 rounded-full xl:mr-2' alt=""></img>
      <div className='hidden xl:inline leading-5 justify-center'>
        <h3 className="font-extrabold">{session?.user?.name}</h3>
        <p className="font-bold">@{session?.user?.tag}</p>
      </div>
      <div className='w-full divide-y divide-black'>
        <div className={`${archivoSeleccionado && "pb-8"} ${inputFeed && "space-y-3"}`}>
          <textarea placeholder='Escribe tu Noticia!, Recuerda que las noticias seran puntuadas por lo que procura que la noticia sea Real, Contamos contigo!.'
            value={inputFeed} rows={3} onChange={(e) => setInputFeed(e.target.value)}
            className="bg-transparent outline-none text-white text-lg 
         placeholder-white tracking-wide w-full overflow-y-auto" >
          </textarea>

          {archivoSeleccionado && (
            <div className='relative'>
              <div className='absolute w-10 h-10 bg-[#FF5733] hover:bg-slate-600 bg-opacity-70 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer'
                onClick={() => setArchivoSeleccionado(null)}>
                <XIcon className='text-white h-5'></XIcon>
              </div>
              <img src={archivoSeleccionado} alt="" className="rounded-2xl max-h-80 object-contain"></img>
            </div>
          )}

          {!cargar && (
          <div className="items-center flex justify-between pt-3">
            <div className="items-center flex ">
              <div className='icon' onClick={() => referenciaImagen.current.click()}>
                <CameraIcon className='h-[24px] text-white'></CameraIcon>
                <input hidden type="file" onChange={addImageToPost} ref={referenciaImagen}></input>
              </div>
            </div>
            <button
              className="bg-[#FF5733] text-white rounded-full px-5 py-2 font-extrabold shadow-md hover:bg-[#FF5733] disabled:hover:bg-[#FF5733] disabled:opacity-60 disabled:cursor-default"
              disabled={!inputFeed && !archivoSeleccionado}
              onClick={enviarPost}
            >
              Publicar Noticia
            </button>
          </div>
           )}
        </div>
      </div>
    </div>

  );
}

export default InputFeed;