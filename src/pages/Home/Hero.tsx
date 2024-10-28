import React, { useEffect } from 'react';
import image from '../../assets/images/pngegg - 2022-12-31T123205 1.png';
import { CalendarClock } from 'lucide-react';
import Aos from 'aos'
import 'aos/dist/aos.css';

const Hero: React.FC = () => {
  useEffect(() => {
    Aos.init({
      once:false,
    });
  },[]);
  return (
    <div data-aos="fade-down" data-aos-duration="1000">
    <div className="w-full  grid  place-items-center "
    
   >
      <div className="w-5/6 grid lg:grid-cols-2 place-items-center">
        <div className='h-full grid justify-between items-center'>
          <div className='flex flex-col gap-4'>
            <div>
            <h4 className="uppercase text-xs" data-aos='fade-right' data-aos-duration="2000">
              Highly Professonal cleaning and Housing Security
            </h4>
            <h1 className="text-orange-600 text-3xl lg:text-5xl font-bold uppercase" data-aos='fade-right' data-aos-duration="2000">
              Ring Solutions
            </h1>
            </div>
            <h1 className="text-slate-600 text-3xl lg:text-5xl font-bold uppercase" data-aos='fade-right' data-aos-duration="2000">
              House and office
            </h1>
            <p className="text-base lg:text-lg" data-aos='fade-right' data-aos-duration="2000">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo.
            </p>
            <div>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-2xl flex gap-2">
                <CalendarClock size={24} />
                <span> Book Schedul</span>
              </button>
            </div>
          </div>
          <div>
            <h1 className='uppercase text-lg text-orange-600  lg:text-xl font-bold'>spring ring Solutions</h1>
            <h1 className='text-slate-600 text-xl lg:text-3xl font-bold uppercase'>Brand You can always trust</h1>
          </div>
        </div>
        <div>
          <img
            src={image}
            alt="banner"
            className="h-[90dvh]"
          />
        </div>
      </div>
      {/* badge */}
      <div className="w-full grid place-items-center bg-orange-600 text-white py-2 px-4">
        <h1 className="text-3xl font-mono font-bold uppercase ">Spring Ring Solutions, we spring beyound our reach</h1>
        </div>
    </div>
    </div>
  );
};

export default Hero;
