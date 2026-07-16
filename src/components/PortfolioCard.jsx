import React from 'react'

const PortfolioCard = (props) => {
  return (
    <div className='p-2 md:w-67.5 md:h-75 justify-around shadow-lg cursor-pointer border-gray-500 rounded-lg hover:scale-95 duration-300 '>
        <img src={props.img} alt="" className='h-30 w-30 m-1' />
        <h1 className=' text-xl font-semibold mb-2 px-2'>{props.heading}</h1>
        <p className='text-sm px-2 text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div className='flex justify-around space-x-2 px-6 py-4 '>
            <button className='bg-blue-500  hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
            <button className='bg-green-500  hover:bg-green-700 text-white font-bold px-4 py-2 rounded '>Source Code </button>
        </div>
    </div>
  )
}

export default PortfolioCard