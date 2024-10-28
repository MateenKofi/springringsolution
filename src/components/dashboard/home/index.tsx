import React from 'react'

const Dashboard:React.FC = () => {
  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
    {/* Summary Statistics */}
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="p-4 bg-white rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Total Users</h2>
        <p className="text-gray-600">1000</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Total Orders</h2>
        <p className="text-gray-600">500</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Revenue</h2>
        <p className="text-gray-600">$10,000</p>
      </div>
    </div>
    {/* Recent Activities */}
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
      <ul className="divide-y divide-gray-200">
        <li className="py-2">
          <p className="text-gray-600">User John Doe registered.</p>
          <p className="text-xs text-gray-400">2 minutes ago</p>
        </li>
        <li className="py-2">
          <p className="text-gray-600">New order received from Jane Smith.</p>
          <p className="text-xs text-gray-400">10 minutes ago</p>
        </li>
      </ul>
    </div>
    {/* Notifications */}
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Notifications</h2>
      <ul className="divide-y divide-gray-200">
        <li className="py-2">
          <p className="text-gray-600">You have a new message from support.</p>
          <p className="text-xs text-gray-400">Just now</p>
        </li>
        <li className="py-2">
          <p className="text-gray-600">New update available, please refresh.</p>
          <p className="text-xs text-gray-400">1 hour ago</p>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Dashboard