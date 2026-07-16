import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <>
    <div name="Home" className=' max-w-screen container mx-auto my-20 md:px-20 px-4'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
          <span className='text-xl'>Welcome In My Feed</span>
          <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1>Hello, I'm a</h1>
            {/* <span className='text-red-700'>Developer</span> */}
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Programmer',
        1000,
        'Coder',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ marginLeft:'3px', color: 'red', display: 'inline-block' }}
      repeat={Infinity}
    />
          </div>
          <br />
          <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime facere officiis repellendus, deleniti et saepe dolores incidunt voluptas rem nisi odit itaque molestias perferendis soluta tempore vitae enim minima.</p>

          {/* social media icon */}
          <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 items-center mt-4 justify-between'>
            <div>
              <h1 className='font-bold space-y-2'>Available On</h1>
              <ul className='flex space-x-5'>
                <li>
                  <a href="https://www.facebook.com/" target='blank'>
                  <FaSquareFacebook className='text-2xl cursor-pointer ' />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target='blank'>
                  <FaLinkedin className='text-2xl cursor-pointer' />
                  </a>
                </li>
                <li>
                  <a href="https://www.telegram.com/" target='blank'>
                  <FaTelegram className='text-2xl cursor-pointer' />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target='blank'>
                  <FaYoutube className='text-2xl cursor-pointer' />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className='font-bold'>Currently working on</h1>
              <div className='flex space-x-5'>
                <SiMongodb className='text-xl md:text-2xl hover:scale-110 duration-100 rounded-full cursor-pointer border' />
                <SiExpress className='text-xl md:text-2xl hover:scale-110 duration-100 rounded-full cursor-pointer border' />
                <FaReact className='text-xl md:text-2xl hover:scale-110 duration-100 rounded-full cursor-pointer border' />
                <FaNodeJs className='text-xl md:text-2xl hover:scale-110 duration-100 rounded-full cursor-pointer border' />

              </div>
            </div>
          </div>
        </div>
        <div className=' md:w-1/2 md:ml-46 md:mt-10 mt-8 order-1 md:order-2'>
          <img src="https://images.stockcake.com/public/0/5/9/059abcd3-426e-4d69-9cdf-c0d353c63189_large/coder-at-work-stockcake.jpg" alt="" className='rounded-full md:h-112.5 md:w-112.5' />
        </div>
      </div>
    </div>
    <hr />
    </>
  )
}

export default Home