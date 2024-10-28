import React from 'react'

interface DUserSectionProps {
  expanded: boolean;
}


const DUserSection:React.FC<DUserSectionProps>  = ({expanded}) => {
  return (
    <div className="pr-4 w-full grid justify-end">
        <div className="flex gap-2">
          <div
            className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div  className={`active:bg-[#716acd] focus:bg-[#716acd] ${
                  expanded ? 'w-full px-2' : 'hidden'
                }`}>
            <p>User Name or information</p>
          </div>
          
        </div>
      </div>
  )
}

export default DUserSection