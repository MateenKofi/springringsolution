import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
