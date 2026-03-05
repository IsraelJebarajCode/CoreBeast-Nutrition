import React from 'react'

export const WhyChooseCard = ({title,description}) => {
  return (
    <div className='shadow-2xl rounded-sm h-100 w-100 mx-4 bg-green-600
    flex flex-col justify-center items-center 
    text-center text-white'>
        <h4 className='font-bold text-2xl my-4'>{title}</h4>
        <p >{description}</p>
    </div>
  )
}
