import React from 'react';
import ApprovalsTable from './table';

const Approvals: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Approvals</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Pending Vendor Registrations */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">
            Pendings
          </h2>
          {/* Sample list of pending vendors */}
          <ul className="divide-y divide-gray-200">
            <li className="py-2">
              <p className="text-gray-600">22,000</p>
            </li>
            {/* Add more pending vendors as needed */}
          </ul>
        </div>

        {/* Approved Vendors */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Approved</h2>
          {/* Sample list of approved vendors */}
          <ul className="divide-y divide-gray-200">
            <li className="py-2">
              <p className="text-gray-600">22,000</p>
            </li>
            {/* Add more approved vendors as needed */}
          </ul>
        </div>

        {/* Rejected Vendors */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Rejected</h2>
          {/* Sample list of rejected vendors */}
          <ul className="divide-y divide-gray-200">
            <li className="py-2">
              <p className="text-gray-600">22,000</p>
            </li>
            {/* Add more rejected vendors as needed */}
          </ul>
        </div>
      </div>
      
      <div className="w-full">
        <ApprovalsTable />
      </div>
    </div>
  );
};

export default Approvals;
