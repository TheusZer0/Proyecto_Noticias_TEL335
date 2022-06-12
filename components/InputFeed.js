import { 
  XIcon,
  CameraIcon
} from '@heroicons/react/solid';
import React, { useState } from 'react'

function InputFeed() {

  const [inputFeed,setInputFeed] = useState("");
  const [inputFile, setInputFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const elegirArchivoSegunReferencia = useState(null)


  const agregarImagenAlPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    };
  }

  return (
    <div className={"border-b border-white p-4 flex space-x-4"}>
          <img src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg" 
          className=' flex flex-center h-8 w-8 rounded-full xl:mr-2'  alt=""></img>
          <div className='hidden xl:inline leading-5 justify-center'>
            <h3 className="font-extrabold">User12345</h3>
            <p className="font-bold">@User12345</p>
          </div>
          <div className='w-full divide-y divide-black'>
            <div className={`${selectedFile && "pb-8"} ${inputFile && "space-y-3"}`}>
              <textarea placeholder='Escribe tu Noticia!, Recuerda que las noticias seran puntuadas por lo que procura que la noticia sea Real, Contamos contigo!.'
               value={inputFeed} rows={3}  onChange={(e) => setInputFeed(e.target.value)}
               className="bg-transparent outline-none text-white text-lg 
               placeholder-white tracking-wide w-full overflow-y-auto" >
              </textarea>

              {inputFile && (
                <div className='relative'>
                  <div className='absolute w-10 h-10 bg-[#FF5733] hover:bg-slate-600 bg-opacity-70 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer'
                  onClick={() => setInputFile(null)}>
                    <XIcon className='text-white h-5'></XIcon>
                  </div>
                <img src={inputFile} alt="" className="rounded-2xl max-h-80 object-contain"></img>
              </div>
              )}
            </div>

            <div className="items-center flex justify-between pt-3">
              <div className="items-center flex ">
                <div className='icon' onClick={()=>elegirArchivoSegunReferencia.current.click()}>
                  <CameraIcon className='h-[24px] text-white'></CameraIcon>
                  <input hidden type="file" onChange={agregarImagenAlPost} ref={elegirArchivoSegunReferencia}></input>
                </div>
              </div>
              <button
              className="bg-[#FF5733] text-white rounded-full px-5 py-2 font-extrabold shadow-md hover:bg-[#FF5733] disabled:hover:bg-[#FF5733] disabled:opacity-60 disabled:cursor-default"
              disabled={!inputFeed.trim() && !selectedFile}
              //onClick={sendPost}
            >
              Publicar Noticia
            </button>
            </div>
          </div>
        </div>
  )
}

export default InputFeed