import { Outlet } from 'react-router-dom';


const RootLayout = () => {
  return (
    <div className="h-screen">
      <Outlet />
    </div>
  );
};

export default RootLayout;
