import React from 'react'
import { Outlet } from 'react-router-dom'

export default function index() {
  return (
    <div className='h-full  px-8 '>
    <Outlet />
    </div>
  )
}
