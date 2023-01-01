import { Icon } from 'Icons'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Artists() {
  return (
    <div className='h-full  px-8  pt-6 flex items-center justify-center'>
        <div className='h-[40vh] flex flex-col -mt-16 gap-4 items-center justify-center text-white'>
            <Icon name="artists" size={64} />
            <h1 className='mt-5 mb-2 font-bold text-3xl h-[52px] tracking-tighter' >İlk sanatçını takip et</h1>
            <span className='mb-8'>Takip et düğmesine dokunarak beğendiğin sanatçıları takip et.</span>
            <Link to={"/search"} className='rounded-full font-bold transition-all duration-300 bg-highlight hover:scale-105 min-h-[48px] flex items-center justify-center px-8 text-black'>
            Sanatçı bul
            </Link>
        </div>
  </div>
  )
}
