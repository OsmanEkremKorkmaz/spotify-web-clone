import Input from 'components/Input'
import { addSong } from '../firebase'
import { Icon } from 'Icons'
import {useState } from 'react'
import { toast } from 'react-hot-toast'

export default function AddSong() {

    const [img, setImg] = useState(false)
    const [isChanged, setIsChanged] = useState(false)
    const [name, setName] = useState("")
    const [album, setAlbum] = useState("")
    const [artist, setArtist] = useState("")
    const [src, setSrc] = useState(false)
    const [duration, setDuration] = useState(0)
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(album.length && name.length && artist.length && src && img){
            
            await addSong({
                name,
                album,
                artist,
                src,
                img
            })
        } else {
            toast.error("Tüm alanları Doldurun")
        }
    }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col mx-auto pt-4 w-full lg:max-w-[768px] px-6 gap-y-4'>
                    <input 
                        style={{display: "none"}}
                        type="file"
                        id="cover"
                        onChange={(e) => {
                            setImg(e.target.files[0])   
                        }}
                        accept="image/jpg, image/jpeg, image/png"
                    />
                    <input 
                        style={{display: "none"}}
                        type="file"
                        id="src"
                        onChange={(e) => {
                            setSrc(e.target.files[0])
                            console.log(e.target.files[0]);
                        }}
                        accept="audio/mp3"
                    />
        <h1 className='text-3xl font-semibold'>Şarkı Ekle</h1>
        <div className='flex flex-col gap-y-4 sm:!flex-row gap-x-6'>
                <div className={`w-full after:pb-[100%] sm:h-[220px] group relative flex items-center mr-auto sm:mr-0 justify-center sm:min-w-[220px] sm:w-[220px] bg-active text-7f z-10 align-baseline self-end playlist-cover-shadow `}>
                    {img ? <img src={URL.createObjectURL(img)} className="object-cover w-full h-full" /> : <Icon name="note" size={48}/>}
                    <label htmlFor="cover" className={`hidden group-hover:flex bg-[#000000b3] text-white flex-col gap-y-2 items-center justify-center absolute top-0 left-0 w-full h-full`}>
                        <span className='mt-4 flex items-center justify-center flex-col'>
                        <Icon name="edit" size={48} />
                        <label className="font-semibold cursor-pointer">Fotoğraf seç</label>
                        </span>
                    </label>
                </div>
                <div className='flex flex-wrap flex-col gap-y-4 w-full max-w-full lg:max-w-[500px]'>
                    <Input label="Şarkı Adı" placeholder="Şarkı adını gir" setIsChanged={setIsChanged} value={name} setValue={setName} />
                    <Input label="Albüm Adı" placeholder="Albüm adını gir" setIsChanged={setIsChanged} value={album} setValue={setAlbum} />
                    <Input label="Sanatçı Adı" placeholder="Sanatçı adını gir" setIsChanged={setIsChanged} value={artist} setValue={setArtist} />
                    <label htmlFor='src' className='bg-[#ffffff1a] mr-auto flex items-center gap-x-2 px-6 py-2 rounded-lg text-link hover:scale-105 cursor-pointer'>
                        <Icon name="cloudUpload" size={36}/>
                        {src ? <span>{src?.name}</span> : <></>}
                    </label>
                </div>
        </div>
        <button
            className="ml-auto flex bg-white text-black rounded-full font-semibold hover:scale-105 items-center justify-center text-center h-12 px-8 py-2" type='submit'
            >
                Kaydet
        </button>
    </form>
  )
}
