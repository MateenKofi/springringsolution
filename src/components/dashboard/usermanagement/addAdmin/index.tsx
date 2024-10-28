import React from 'react'
import { signupData } from '../../../Authentications/data';



interface signupDataFields {
  label: string;
  placeholder: string;
  type: string;
}


const AddAdmin:React.FC = () => {
  return (
    <>
    <div className=' grid place-items-end'>
    <button
       className="btn bg-orange-600 text-white btn-sm"
       onClick={() =>
         (document.getElementById('adduser') as HTMLDialogElement).showModal()
       }>
       Add New Admin
     </button>
    </div>
     <dialog
       id="adduser"
       className="modal">
       <div className="modal-box">
         <form method="dialog">
           {/* if there is a button in form, it will close the modal */}
           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
             ✕
           </button>
         </form>
         <div className="p-4">
           <h2 className="text-lg font-semibold mb-4">Add New User</h2>
           <form action="">
             {signupData.map((field: signupDataFields, index: number) => {
               return (
                 <div
                   key={index}
                   className="w-full flex flex-col">
                   <label
                     htmlFor={`field-${index}`}
                     className="text-slate-700 font-bold text-lg py-2">
                     {field.label}
                   </label>
                   <input
                     type={field.type}
                     id={`field-${index}`}
                     placeholder={field.placeholder}
                     className="border-2 border-slate-300 p-2 rounded-md"
                   />
                 </div>
               );
             })}
             <div>
               <button
                 type="submit"
                 className="text-lg bg-orange-600 text-white py-3 rounded-md mt-4 w-full hover:bg-orange-500 transition duration-300 ease-in-out">
                 Add User
               </button>
             </div>
           </form>
         </div>
       </div>
     </dialog>
     </>
  )
}

export default AddAdmin