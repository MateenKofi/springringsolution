import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import UserSection from './UserSection';
import SingIn from '../../components/Authentications/SingIn';
import logo from '../../assets/images/logo.svg'
import SignUp from '../../components/Authentications/SingUp';

const Navbar: React.FC = () => {
  const [bookings, setBookings] = useState<boolean>(false)
  const [signIn, setSignIn] = useState<boolean>(false)
  const [signUp, setSignUp] = useState<boolean>(false)
  const showSignIn = () => {
    setSignIn(true)
    setSignUp(false)
  }
  const showSignUp = () => {
    setSignUp(true)
    setSignIn(false)
  }
  const handleBookingsClick = () => {
    setBookings(true)
  }
  const handleHomeClick = () => {
    setBookings(false)
  }
  return (
    <div className="w-full static z-50">
      {signIn && <SingIn setSignIn={setSignIn} />}
      {signUp && <SignUp setSignUP={setSignUp}/>}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to={'/'} onClick={handleHomeClick}>Home</Link>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    if (bookings) e.preventDefault();
                  }}
                  className={bookings ? 'disabled text-slate-300' : ''}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    if (bookings) e.preventDefault();
                  }}
                  className={bookings ? 'disabled text-slate-300' : ''}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#cctv"
                  onClick={(e) => {
                    if (bookings) e.preventDefault();
                  }}
                  className={bookings ? 'disabled text-slate-300' : ''}
                >
                  CCTV
                </a>
              </li>
              <li>
                <Link
                  to={'/bookings'}
                  onClick={handleBookingsClick}
                >
                  Bookings
                </Link>
              </li>
            </ul>
          </div>
          <a className="flex flex-col items-center ">
            <img src={logo} alt="logo" className="w-10 h-10"/>
            
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
                <Link to={'/'} onClick={handleHomeClick}>Home</Link>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    if (bookings) e.preventDefault();
                  }}
                  className={bookings ? 'disabled text-slate-300' : ''}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    if (bookings) e.preventDefault();
                  }}
                  className={bookings ? 'disabled text-slate-300' : ''}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#cctv"
                  onClick={(e) => {
                    if (bookings) e.preventDefault();
                  }}
                  className={bookings ? 'disabled text-slate-300' : ''}
                >
                  CCTV
                </a>
              </li>
              <li>
                <Link
                  to={'/bookings'}
                  onClick={handleBookingsClick}
                >
                  Bookings
                </Link>
              </li>
          </ul>
        </div>
        <div className="navbar-end mr-4 flex gap-4">
         <UserSection showSignIn={showSignIn} showSignUp={showSignUp}/>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
