import React from 'react'

export default function SpecialTracks({props}) {
  return (
    <div className='flex flex-col gap-4 font-Poppins bg-[#231E35] text-white rounded-xl p-6'>
        <div className='h-[40%] w-full overflow-hidden'>
            <img className='bg-cover min-h-full min-w-full' src={props.img.src}></img>
        </div>
        <div>
        <h1 className='text-center text-4xl'>{props.companyName}</h1>
        <div className='pt-5'>
            <h2 className='text-2xl'><b>Prize Pool</b></h2>
            <h2 className='text-xl'>{props.amount}</h2>
        </div>
        {props.points.map(point => {
            return <div key={point.title} className=''>
                <h1 className='text-2xl'><b>{point.title}</b></h1>
                <h2 className='text-xl'>{point.amount}</h2>
            </div>
        })}
        </div>
    </div>
  )
}
