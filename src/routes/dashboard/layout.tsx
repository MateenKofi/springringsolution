import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../../components/dashboard/nagivations/NavBar'
import SideBar from '../../components/dashboard/nagivations/SideBar'

const DashboardLayout:React.FC = () => {
  return (
    <div className="flex w-full h-screen  items-start overflow-y-hidden ">
      <SideBar />
      <div className='w-full '>
        {' '}
        <NavBar />
        <div className=''>
        <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout