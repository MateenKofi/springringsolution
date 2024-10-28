import React from 'react';
import underconstruction from '../assets/images/underconstruction.jpeg';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
const UnderMaintainance:React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen ">
      <main className="flex flex-col items-center justify-center flex-grow p-4">
        <img
          src={underconstruction}
          alt="Underconstruction"
          className="w-80 h-80 object-cover"
        />
        <h1 className="mt-4 text-2xl font-semibold">Under Maintenance</h1>
        <p className="w-4/6 mt-2 text-center text-gray-600">
          Sorry for the inconvenience but we're performing some maintenance at
          the moment. If you need to you can always{' '}
          <a
            href="#"
            className="text-blue-600 underline">
            contact us
          </a>
          , otherwise we'll be back online shortly!
        </p>
        <Link to={'/'}>
        <button className="flex items-center justify-center px-4 py-2 mt-4 text-white bg-orange-600 rounded hover:bg-orange-700">
         <ChevronLeft size={20} className="mr-2" />
          <span>Go back home</span>
        </button>
        </Link>
      </main>
    </div>
  );
};

export default UnderMaintainance;
