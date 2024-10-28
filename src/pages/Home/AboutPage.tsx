import React, { useEffect } from 'react';
import image1 from '../../assets/images/Rectangle 11.png';
import image2 from '../../assets/images/Rectangle 8.png';
import { Contact, Store } from 'lucide-react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutPage: React.FC = () => {
  useEffect(() => {
    Aos.init({
      once: false,
    });
  }, []);
  return (
    <div
      className="w-full grid bg-[#fff]  place-items-center"
      id="about">
      <div className="w-5/6 grid lg:grid-cols-[2fr,3fr] place-items-center">
        <div className=" w-full h-fit grid justify-between">
          <div className="flex flex-col gap-4">
            <header className="text-orange-600 font-bold text-xl flex gap-2"
            data-aos="fade-right" data-aos-duration="700"
            >
              <span>
                <Store />
              </span>
              <p>About us</p>{' '}
            </header>
            <h2 className="text-2xl lg:text-3xl font-bold uppercase" data-aos="fade-right"
            data-aos-duration="1000">
              quickly and easy ways to clean your house
            </h2>
            <p data-aos="fade-right" data-aos-duration="1300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase text-2xl font-bold text-orange-600 pt-4"
            data-aos="fade-right" data-aos-duration="1500">
              award winning company
            </h2>
            <p data-aos="fade-right" data-aos-duration="2000">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo.
            </p>
            <div>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-2xl flex gap-2"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
                <Contact size={24} />
                <span> Contact Us</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full grid lg:grid-cols-2 grid-rows-2 gap-2 max-sm:py-10">
          <div className="col-span-1 row-span-2  grid place-items-center" data-aos="zoom-in">
            <img
              src={image1}
              alt="image1"
              className="w-full lg:h-1/2 rounded-md"
            />
          </div>
          <div className="grid place-items-center lg:-mb-12" data-aos="zoom-in">
            <img
              src={image2}
              alt="image2"
              className="w-full lg:h-3/5  rounded-md"
            />
          </div>
          <div className=" grid place-items-center lg:-mt-12" data-aos="zoom-in">
            <img
              src={image1}
              alt="image1"
              className="w-full lg:h-3/5  rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;


