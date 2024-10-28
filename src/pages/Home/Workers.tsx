import React from 'react'
import { Image } from 'primereact/image';
import { Worker } from '../../assets/data/data'

const Workers:React.FC = () => {
  return (
    <div className='w-5/6  mx-auto grid lg:grid-cols-4 gap-4 py-6'>
        {Worker.map((member)=>{
            return(
                <div className="card flex justify-content-center shadow-xl border-2" key={member.id}>
                <Image src={member.image} alt="Image" width="250" className='bg-slate-50'/>
                <div className="card-body text-center">
                    <h5 className='font-bold text-2xl'>{member.name}</h5>
                    <p className='text-slate-500 tracking-wider'>{member.job}</p>
                    </div>
            </div>
            )
        })}
    </div>
  )
}

export default Workers