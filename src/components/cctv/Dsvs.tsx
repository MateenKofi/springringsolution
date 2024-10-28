import React from 'react'
import cameraImg from '../../assets/images/camera.png';

const Dsvs:React.FC = () => {
  return (
    <div className="gap-14 w-3/4 mx-auto my-10  py-5 px-2 max-sm:p-0 max-sm:flex-col lg:flex">
    {/* DSVS Software Text Content*/}
    <div className="flex flex-col w-auto">
      <h1 className="text-[45px] font-normal">DSVS SOFTWARE</h1>
      <p className="text-lg py-2 w-[58%]">
        DSVS provides a free surveillance solution for managing multiple
        NVR/DVR/IPC
      </p>
      <ul className="list-disc">
        <li className="ml-8 py-1 text-lg">
          Up to 128 channels remote live view
        </li>
        <li className="ml-8 py-1 text-lg">
          Up to 9 channels remote playback
        </li>
        <li className="ml-8 py-1 text-lg">Create & Configure E-Maps</li>
        <li className="ml-8 py-1 text-lg">
          Supports Multi-screen display
        </li>
      </ul>
      {/* Buttons */}
      <div className="flex items-center mt-5 ">
        <button className="py-2  px-4 bg-orange-600 text-white  rounded-lg ml-1 text-lg font-normal md:mt-2">
          DSVS 1.5 (For M series)
        </button>
        <button className="py-2  px-4 bg-orange-600 text-white  rounded-lg ml-1 text-lg font-normal md:mt-2">
          DSVS 2.0 (For L series)
        </button>
      </div>
    </div>
    {/* Image */}
    <div className="w-auto">
      <img
        src={cameraImg}
        className=""
        alt="cctv-pciture"
      />
    </div>
  </div>
  )
}

export default Dsvs