// signupData.tsx
import React from 'react';
import {signupData} from './data';
import { X } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
// import { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";

interface signupDataFields {
  label: string;
  placeholder: string;
  type: string;
}

const SignUp : React.FC<{ setSignUP: (show: boolean) => void }> = ({
  setSignUP,
}) => {

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-55">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <div className="w-full max-w-md mx-10 bg-white rounded-lg p-6 relative">
        
          <button
            onClick={() => setSignUP(false)}
            className="text-xl text-slate-700 absolute left-96 max-sm:left-80">
            <X size={24} />
          </button>

        <header className='py-2'>
          <h1 className="font-bold text-4xl text-orange-600">SignUp</h1>
          <div className='h-1 w-6 bg-slate-500 rounded-lg'></div>
        </header>
        <form action="">
          {signupData.map((field: signupDataFields, index: number) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col">
                <label
                  htmlFor={`field-${index}`}
                  className="text-slate-700 font-bold text-lg py-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={`field-${index}`}
                  placeholder={field.placeholder}
                  className="border-2 border-slate-300 p-2 rounded-md"
                />
              </div>
            );
          })}
          <div>
            <button
              type="submit"
              className="text-lg bg-orange-600 text-white py-3 rounded-md mt-4 w-full hover:bg-orange-500 transition duration-300 ease-in-out">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
