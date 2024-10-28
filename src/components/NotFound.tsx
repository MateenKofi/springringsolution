import React from 'react';
import notfound from '../assets/images/404.jpeg';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound:React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex flex-col items-center justify-center flex-grow p-4">
        <img
          src={notfound}
          alt="404 Page Not Found"
          className="w-80 h-80"
        />
        <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
        <p className="mt-2 text-center text-gray-600">
          Oops! Looks like you followed a bad link. If you think this is a
          problem with us, please tell us.
        </p>
        <Link to={'/'}>
        <button className="flex items-center justify-center px-4 py-2 mt-4 text-white bg-orange-600 rounded hover:bg-orange-700">
            <ChevronLeft size={20} className="inline-block" />
         <span>Go back home</span>
        </button>
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
