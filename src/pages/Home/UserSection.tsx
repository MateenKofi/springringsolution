import React from 'react';

interface UserSectionProps {
    showSignIn: () => void;
    showSignUp:()=>void;
}

const UserSection: React.FC<UserSectionProps> = ({ showSignIn,showSignUp }) => {
const user = false;

  return (
   <div>
    {user ? (
        <h1 className='border-2 border-slate-950 rounded-full'><div className="avatar">
        <div className="rounded-full w-10 h-10 m-1">
          <img
            src="https://i.pravatar.cc/500?img=32"
            alt="User Avatar"
          />
        </div>
      </div></h1>
    ):(
        <div className="flex gap-2">
        <button className="border-2 border-orange-600 py-1 px-4 rounded-lg"
        onClick={showSignIn}
        >
          Sign In
        </button>
        <button className="border-2 border-orange-600 bg-orange-600 text-white py-1 px-4 rounded-lg"
        onClick={showSignUp}
        >
          Sign Up
        </button>
      </div>
    )}
   </div>
  );
};

export default UserSection;
