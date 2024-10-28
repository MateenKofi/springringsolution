const formData = [
    {
      label: 'First Name',
      type: 'text',
      placeholder: 'Enter First Name Here',
    },
    {
      label: 'Last Name',
      type: 'text',
      placeholder: 'Enter Last Name Here',
    },
    {
      label: 'Name of Company/Institution',
      type: 'text',
      placeholder: 'Name of Company/Institution',
    },
    {
      label: 'Location',
      type: 'text',
      placeholder: 'Address (Region,city,Town,Area)',
    },
    {
      label: 'Email',
      type: 'email',
      placeholder: 'Enter Email Address',
    },
    {
      label: 'Phone Number',
      type: 'tel',
      placeholder: 'Enter Phone Number',
    },
    {
      label: 'Service',
      type: 'select',
      placeholder: 'Select type of sevices Service',
      options: ['Cleaning', 'Security Fence', 'CCTV Installation','Cleaning + Security Fence','Cleaning + CCTV Installation','Security Fence + CCTV Installation','Full'
      ],
    },
    {
        label:'Subscription',
        type:'select',
        placeholder:'select subcription type',
        options:['Weekly','Monthly','Yearly','None']
    },
    {
      label: 'Message',
      type: 'text',
      placeholder: 'Enter Message Here',
    },
  ];
  
  export default formData;
  