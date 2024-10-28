import React, { useState } from 'react';
import PendingData from '../../../data/dashboard/pending';

interface Category {
  id: string;
  name: string;
  content: JSX.Element;
}

const ApprovalsTable: React.FC = () => {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setOpenCategoryId(openCategoryId === categoryId ? null : categoryId);
  };

  const categories: Category[] = [
    {
      id: 'pending',
      name: 'Pending Vendor Registrations',
      content: (
        <div className="bg-blue-50 p-2">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                    />
                  </label>
                </th>
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
                  <th>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox"
                      />
                    </label>
                  </th>
                  <td className="w-full">{item.fullname}</td>
                  <td className="w-full">{item.companyname}</td>
                  <td className="w-full">{item.location}</td>
                  <td className="w-full">{item.email}</td>
                  <td className="w-full">{item.location}</td>
                  <td className="w-full">{item.service}</td>
                  <td className="w-full">{item.subscription}</td>
                  <th className="flex gap-2">
                    <button className="btn bg-orange-600 text-white btn-xs">
                      Approve
                    </button>
                    <button className="btn bg-red-600 text-white btn-xs">
                      Reject
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      id: 'approved',
      name: 'Approved Vendors',
      content: (
        <div className="bg-blue-50 p-2">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                  />
                </label>
              </th>
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
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                    />
                  </label>
                </th>
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
      ),
    },
    {
      id: 'rejected',
      name: 'Rejected Vendors',
      content: (
        <div className="bg-blue-50 p-2">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                  />
                </label>
              </th>
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
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                    />
                  </label>
                </th>
                <td className="w-full">{item.fullname}</td>
                <td className="w-full">{item.companyname}</td>
                <td className="w-full">{item.location}</td>
                <td className="w-full">{item.email}</td>
                <td className="w-full">{item.location}</td>
                <td className="w-full">{item.service}</td>
                <td className="w-full">{item.subscription}</td>
                <th className="flex gap-2">
                  <button className="btn bg-orange-600 text-white btn-xs">
                    Approve
                  </button>
                  <button className="btn bg-red-600 text-white btn-xs">
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Approvals</h1>
      <div>
        {categories.map((category) => (
          <div
            key={category.id}
            className="mb-4">
            <button
              className="flex items-center justify-between w-full px-4 py-2 bg-gray-200 rounded-md"
              onClick={() => toggleCategory(category.id)}>
              <span>{category.name}</span>
              <svg
                className={`w-4 h-4 transition-transform transform ${
                  openCategoryId === category.id ? 'rotate-180' : ''
                }`}
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {openCategoryId === category.id && category.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovalsTable;
