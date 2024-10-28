import React from 'react'
import UserForm from '../../components/form/UserForm'

const Bookings:React.FC = () => {
  return (
    <div className='w-1/2 py-10'>
        <h1 className='text-6xl font-bold text-orange-600'>Bookings</h1>
        <div className='h-1 bg-slate-500 rounded my-2 w-24'></div>

        <UserForm /> 
    </div>
  )
}

export default Bookings