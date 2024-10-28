const notifications = [
    {
      id: 1,
      content: "New feature update: Improved search functionality now available!",
      sender: "Admin",
      recipients: ["User1", "User2", "User3"],
      timestamp: new Date("2024-05-07T09:00:00"),
      read: false
    },
    {
      id: 2,
      content: "Scheduled maintenance: The system will undergo maintenance on May 10th, 2024, from 12:00 AM to 2:00 AM UTC.",
      sender: "Admin",
      recipients: ["All Users"],
      timestamp: new Date("2024-05-06T15:30:00"),
      read: false
    },
    {
      id: 3,
      content: "Payment reminder: Your subscription is expiring soon. Renew now to avoid service interruption.",
      sender: "Admin",
      recipients: ["User3"],
      timestamp: new Date("2024-05-05T10:45:00"),
      read: true
    },
    // Add more notifications as needed
  ];
  
  export default notifications;
  