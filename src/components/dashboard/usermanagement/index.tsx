import React from 'react';
import 'tailwindcss/tailwind.css';
import PendingData from '../../data/dashboard/pending';
import AddUser from './adduser';
import AddAdmin from './addAdmin';


const UserManagement: React.FC = () => {
  return (
    <div className="p-4">
      
    <div className='flex items-end justify-end'>
    <AddUser/>
    <AddAdmin/>
    </div>

      <h2 className="text-lg font-semibold mt-8">All Users</h2>
      <table className="table w-full mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Company Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Service</th>
            <th>Subscription</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {PendingData.map((item, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td className="w-full">{item.fullname}</td>
              <td className="w-full">{item.companyname}</td>
              <td className="w-full">{item.location}</td>
              <td className="w-full">{item.email}</td>
              <td className="w-full">{item.location}</td>
              <td className="w-full">{item.service}</td>
              <td className="w-full">{item.subscription}</td>
              <th className="flex gap-2">
                <button className="btn bg-red-600 text-white btn-xs">
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
