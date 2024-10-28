import React from 'react'
import { Outlet } from 'react-router'

const LandingPage:React.FC = () => {
  return (
    <div className=''>
        <Outlet />
    </div>
  )
}

export default LandingPage