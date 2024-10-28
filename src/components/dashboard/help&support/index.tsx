import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import 'tailwindcss/tailwind.css';

const HelpAndSupport: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Help & Support</h2>
      <div className="flex gap-4">
        <div className="mb-4 p-4 shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Help Center</h3>
          <p className="text-gray-600">
            Visit our Help Center for answers to frequently asked questions,
            tutorials, and guides.
          </p>
          <Link
            to="/help-center"
            className="text-blue-600 hover:underline">
            Go to Help Center
          </Link>
        </div>

        <div className="mb-4 p-4 shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Documentation</h3>
          <p className="text-gray-600">
            Access our comprehensive documentation for detailed information on
            features and usage.
          </p>
          <Link
            to="/documentation"
            className="text-blue-600 hover:underline">
            Go to Documentation
          </Link>
        </div>

      </div>
        <div className='p-4 shadow-lg'>
          <h3 className="text-lg font-semibold mb-2">Contact Support</h3>
          <p className="text-gray-600">
            Need further assistance? Contact our support team for help with
            technical issues or inquiries.
          </p>
          <a
            href="mailto:support@example.com"
            className="text-blue-600 hover:underline">
            Email Support
          </a>
        </div>
    </div>
  );
};

export default HelpAndSupport;
