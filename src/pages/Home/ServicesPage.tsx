
import React from 'react';
import ServicesCleaning from './ServicesCleaning';
import ServicesSecurity from './ServicesSecurity';

const ServicesPage: React.FC = () => {
  return (
    <div className="w-full h-full py-6 grid bg-[#fff]  place-items-center" id='services'>
      <div className="w-full grid  place-items-center">
        <div className="text-center py-6">
          <h5 className="text-orange-600 font-bold text-lg py-3">our service</h5>
          <h1 className="3xl text-5xl text-slate-700 font-sans font-bold uppercase">
            what we are offering
          </h1>
        </div>
        {/* cleaning */}
        <ServicesCleaning />
        {/* security */}
        <ServicesSecurity />
        
      </div>
    </div>
  );
};

export default ServicesPage;
