import React from 'react'
import mobileImg from '../../assets/images/mobile.png';

const Mobile:React.FC = () => {
    
  return (
    <div className="gap-14 w-2/3 max-sm:w-full mx-auto max-sm:flex-col lg:flex my-10 justify-center items-center">
    <div className="w-60 h-96">
      <img
        src={mobileImg}
        alt="Mobile-app"
        className="w-full h-full"
      />
    </div>
    <div className="flex flex-col justify-center w-[65%] max-sm:w-full px-3">
      <h1 className="font-bold text-slate-600 text-4xl uppercase  py-1">
        Get the your home, word place, and office surveillance on your phone
      </h1>
      <p className="text-[#494949] text-xl md:w-full w-4/5 py-1">
        We will send you a link, open it on your phone to download the
        app
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quaerat ad consequatur dignissimos natus, perferendis ducimus optio harum animi! Accusantium consequatur et quidem doloribus laboriosam rem autem ea voluptatum ipsum!
      </p>
     
    </div>
  </div>
  )
}

export default Mobile