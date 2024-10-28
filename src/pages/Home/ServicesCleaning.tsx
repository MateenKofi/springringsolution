import React from 'react'
import {  AppWindow, LayoutPanelTop } from 'lucide-react';
import floor from '../../assets/svgs/floor.svg'
import house from '../../assets/svgs/house.svg'


const ServicesCleaning:React.FC = () => {
  return (
    <div className="w-full px-20 max-sm:mt-10 z-0">
          <div className="w-full  bg-[#fff] grid place-items-center">
            <h1 className="border-b-2 text-orange-600 font-bold text-2xl mb-10 pb-4">
              cleaning service
            </h1>

            <div className="w-full max-sm:mt-10  grid lg:grid-cols-4 gap-4 place-items-center">
              <div className="border-2 rounded-lg flex flex-col items-center relative">
                <div className=" border-2 rounded-full p-6 absolute -top-12 bg-white text-orange-600">
                <img src={house}
                  alt="house"
                  className="w-16 h-16 object-cover text-orange-600"
                />
                </div>
                <div className="pt-14 pb-8 px-2 text-center">
                  <h1 className="text-2xl font-bold text-orange-600 py-2">
                    House & Office
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    amet lacus accumsan et viverra justo commodo.
                  </p>
                </div>
              </div>
              <div className="border-2 rounded-lg flex flex-col items-center relative">
                <div className=" border-2 rounded-full p-6 absolute -top-12 bg-white text-orange-600">
                  <LayoutPanelTop size={40} />
                </div>
                <div className="pt-14 pb-8 px-2 text-center">
                  <h1 className="text-2xl font-bold text-orange-600 py-2">
                    Polly Tank Cleaning
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    amet lacus accumsan et viverra justo commodo.
                  </p>
                </div>
              </div>
              <div className="border-2 rounded-lg flex flex-col items-center relative">
                <div className=" border-2 rounded-full p-4 absolute -top-12 bg-white text-orange-600">
                  {/* <GiVacuumCleaner className="text-6xl font-extrabold" />
                   */}
                  <img src={floor}
                  alt="floor"
                  className="w-16 h-16 object-cover text-orange-600"
                />
                </div>
                <div className="pt-14 pb-8 px-2 text-center">
                  <h1 className="text-2xl font-bold text-orange-600 py-2">
                    Floor Cleaning
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    amet lacus accumsan et viverra justo commodo.
                  </p>
                </div>
              </div>
              <div className="border-2 rounded-lg flex flex-col items-center relative">
                <div className=" border-2 rounded-full p-6 absolute -top-12 bg-white text-orange-600">
                  <AppWindow size={40} />
                </div>
                <div className="pt-14 pb-8 px-2 text-center">
                  <h1 className="text-2xl font-bold text-orange-600 py-2">
                    Window Cleaning
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    amet lacus accumsan et viverra justo commodo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ServicesCleaning