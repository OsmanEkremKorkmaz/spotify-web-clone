import ComponenetShelf from 'components/ComponentShelf'
import React from 'react'
import items from "data/podcasts"
import { Icon } from 'Icons'

export default function Podcasts() {
  return (
    <div className=' px-8  pt-6'>
        <div className='h-[40vh] flex flex-col gap-4 items-center justify-center'>
          <Icon name="podcasts" size={64} />
          <h1 className='mt-5 mb-2 font-bold text-3xl h-[52px] tracking-tighter' >İlk podcast'ini takip et</h1>
          <span className='mb-8'>Takip et düğmesine dokunarak beğendiğin podcast'leri takip et.</span>
          <a className='rounded-full font-bold transition-all duration-300 bg-highlight hover:scale-105 min-h-[48px] flex items-center justify-center px-8 text-black'>
            Podcast bul
          </a>
        </div>
        <ComponenetShelf title="En Çok Dinlenen Podcast'ler" more="/blabla" items={items} />
    </div>
  )
}
