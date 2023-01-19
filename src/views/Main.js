import { useWindowWidth } from '@react-hook/window-size'
import BottomBar from 'components/BottomBar'
import BottomNavbar from 'components/BottomBar/BottomNavbar'
import Content from 'components/Content'
import Sidebar from 'components/Sidebar'
import React from 'react'

export default function MainLayout() {
  const windowWith = useWindowWidth()
  return (
    <div className='h-full flex flex-col'>
        <div className="md:wrapper flex">
            {windowWith >= 768 ? <Sidebar /> : null}
            <Content />
        </div>
        <BottomBar />
        {/* {windowWith < 768 ?  <BottomNavbar /> : null} */}
    </div>
  )
}
