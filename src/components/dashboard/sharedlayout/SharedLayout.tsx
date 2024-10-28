import { Outlet } from 'react-router';
import SideBar from '../nagivations/SideBar';
import NavBar from '../nagivations/NavBar';
import React from 'react';

const SharedLayout:React.FC = () => {
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
  );
};

export default SharedLayout;
