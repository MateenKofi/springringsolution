import React from 'react';
import formData from '../form/formData';

interface FormField {
  label: string;
  type: string;
  placeholder: string;
  options?: string[]; // Make options an optional array of strings
}

const UserForm: React.FC = () => {
  return (
    <div className='w-full'>
      <form action='' className='w-full'>
        {formData.map((field: FormField, index: number) => {
          if (field.type === 'select' && field.options) { // Check if options exist
            return (
              <div key={index} className='w-full flex flex-col'>
                <label
                  htmlFor={`field-${index}`}
                  className='text-slate-700 font-bold text-lg py-2'
                >
                  {field.label}
                </label>
                <select
                  id={`field-${index}`}
                  className='border-2 border-slate-300 p-2 rounded-md'
                >
                  <option value='' className='capitalize'>{field.placeholder}</option>
                  {field.options.map((option: string, optionIndex: number) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            );
          } else {
            return (
              <div key={index} className='w-full flex flex-col'>
                <label
                  htmlFor={`field-${index}`}
                  className='text-slate-700 font-bold text-lg py-2'
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={`field-${index}`}
                  placeholder={field.placeholder}
                  className='border-2 border-slate-300 p-2 rounded-md'
                />
              </div>
            );
          }
        })}
        <button
          type='submit'
          className='text-lg bg-orange-600 text-white py-3 rounded-md mt-4 w-full hover:bg-orange-500 transition duration-300 ease-in-out'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
