import React from 'react';
import notifications from './data';
import ComposeMessage from './compose';


// interface Notification {
//   id: number;
//   content: string;
//   sender: string;
//   recipients: string[];
//   timestamp: Date;
//   read: boolean;
// }

const Notifications: React.FC = () => {



  

  
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Notifications</h2>
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">View Notifications</h3>
        {/* Display notifications list */}
        <ul>
          {notifications.map(notification => (
            <li key={notification.id} className={`p-2 ${notification.read ? 'bg-gray-200 rounded-lg' : 'bg-white'}`}>
              <p>{notification.content}</p>
              <p>
                <span className='font-bold'>Sender:</span> {notification.sender}</p>
              <p>Recipients: {notification.recipients.join(', ')}</p>
              <p>Timestamp: {notification.timestamp.toDateString()}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* Send New Notification */}
      <ComposeMessage />
      <div>
        <h3 className="text-lg font-semibold mb-2">Notification Settings</h3>
        {/* Add notification settings here */}
      </div>
    </div>
  );
};
export default Notifications;
