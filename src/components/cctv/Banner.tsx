import React from 'react'
import bannerImg from '../../assets/images/vecteezy_cctv-logo-illustration_5764647 [Converted] 1.png';

const Banner:React.FC = () => {
  return (
    <div className="w-full grid place-items-center bg-white pt-6">
          <div className="w-5/6 grid lg:grid-cols-2 place-items-center">
            <div className="w-full grid place-items-center">
              <h1 className="text-center text-orange-600 text-6xl max-sm:text-2xl max-sm:font-extrabold font-bold py-5 capitalize">
                Ring solution providng the best CCTV services
              </h1>
              <p className="text-center text-xl tracking-wider text-[#676767]">
                Eagle Eye is a cloud-managed video surveillance system that links
                your cameras to the cloud, allowing you to monitor your
                property from anywhere in the world.
              </p>
            </div>
            <div className="w-full grid place-items-center">
              <img src={bannerImg} alt="banner" className="" />
            </div>
          </div>
        </div>
  )
}

export default Banner