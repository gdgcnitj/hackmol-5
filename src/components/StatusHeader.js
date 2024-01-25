import React from 'react'

export default function StatusHeader(props) {
  return (
    <div className='w-full p-4 bg-black sticky'>
        <h1 className='text-white text-center text-2xl font-Poppins'>{props.text}</h1>
    </div>
  )
}
