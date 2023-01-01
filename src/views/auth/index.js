import React from 'react'
import { Outlet } from 'react-router-dom'

export default function index() {
  return (
    <div className='h-full w-full bg-white overflow-y-auto'>
        <div className=' text-black'>
            <Outlet />
        </div>
    </div>
  )
}
