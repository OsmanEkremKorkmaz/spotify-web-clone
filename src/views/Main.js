import BottomBar from 'components/BottomBar'
import Content from 'components/Content'
import Sidebar from 'components/Sidebar'
import React from 'react'

export default function index() {
  return (
    <div className='h-full'>
        <div className="wrapper">
            <Sidebar />
            <Content />
        </div>
        <BottomBar />
    </div>
  )
}
