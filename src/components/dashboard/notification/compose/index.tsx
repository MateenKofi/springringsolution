import React from 'react'

const ComposeMessage:React.FC = () => {
   
    
  return (
    <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Send New Notification</h3>
        <button className="btn bg-orange-600 text-white btn-sm"  onClick={() =>
         (document.getElementById('message') as HTMLDialogElement).showModal()
       }>Compose Notification</button>

        <dialog
        id="message"
        className="modal"
        >
          <div className="p-4 modal-box">
          <form method="dialog">
           {/* if there is a button in form, it will close the modal */}
           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
             ✕
           </button>
         </form>
            <h2 className="text-lg font-semibold mb-4">Compose Notification</h2>
            <textarea className="w-full textarea" placeholder="Enter notification content"></textarea>
            <div className="flex justify-end mt-4">
              <button className="btn bg-orange-600 text-white" >Send Notification</button>
            </div>
          </div>
        </dialog>
      </div>
  )
}

export default ComposeMessage