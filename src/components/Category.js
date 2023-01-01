import React from 'react'

function Category({category}) {
  return (
    <div style={{backgroundColor: category.color}} className="rounded-lg before:pt-[100%] before:block relative  overflow-hidden" >
        <div className='absolute inset-0'>
            <h3 className='p-4 text-2xl tracking-tighter font-bold'>{category.title}</h3>
            <img src={category.cover} alt={category.title} className='w-[6.25rem] h-[6.25rem] object-cover rotate-[25deg] shadow-category translate-x-[18%] translate-y-[-2%] absolute bottom-0 right-0'/>
        </div>
    </div>
  )
}

export default Category