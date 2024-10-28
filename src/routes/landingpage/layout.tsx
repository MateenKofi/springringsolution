import { Outlet } from "react-router-dom";
import Footer from "../../pages/Home/Footer";
import Navbar from "../../pages/Home/Navbar";

const LandingPage = () => {
  return (
    <div className="w-screen h-screen relative">
      <Navbar />
      <div className="w-full border-2 grid place-items-center">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
