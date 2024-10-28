import React from 'react';
import Badge from '../../components/cctv/Badge';
import Banner from '../../components/cctv/Banner';
import Mobile from '../../components/cctv/Mobile';
import DSVS from '../../components/cctv/Dsvs';



const CCTVPage: React.FC = () => {
  
  return (
    <div className="w-full grid place-items-center  h-auto">
      <div className="w-2/3 grid place-items-center ">
        {/* Header */}
        <header className="text-center uppercase font-bold">
          <h1 className="text-[42px] max-sm:text-[28px] py-5">
            <span className="text-orange-600">Ring Solution</span> range of{' '}
            <span className="text-orange-600">security</span> Cameras
          </h1>
        </header>
        {/* Cards */}
     <Badge />
      </div>
      {/* Banner */}
      <section className="w-full">
        <Banner />
        {/* Calls section */}
        <p className="bg-orange-600 p-5 text-center text-white font-medium text-[27px] uppercase">
          easy and fastest way to your security services!
        </p>
        {/* Get the App */}
        <section className="w-full flex flex-col items-center justify-between pt-10">
          {/* Eagle Eye App */}
        <Mobile />

          {/* DSVS Software */}
        <DSVS />
        </section>
      </section>
    </div>
  );
};

export default CCTVPage;
