import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import {Link} from 'react-scroll';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const navItems = [
        { id:1, text:"Home" },
        { id:2, text:"About" },
        { id:3, text:"Portfolio" },
        { id:4, text:"Experience" },
        { id:5, text:"Contact" },
    ]
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2'>
                        <img src="https://t3.ftcdn.net/jpg/05/40/62/46/360_F_540624608_gGfUf4SuPCzzBPA3GPoH6nHphsSEMDeA.jpg" alt="" className='h-12 w-12 rounded-full' />
                        <h1 className='font-bold text-xl cursor-pointer'>Sahil Prajapati
                            <p className='text-sm'>MERN Stack Developer</p>
                        </h1>
                    </div>
                    <div>
                        <ul className='hidden md:flex space-x-8 cursor-pointer' >
                            {navItems.map((item)=>{
                                return <li key={item.id} className='hover:scale-105 duration-200 cursor-pointer'>
                                    <Link 
                                    to={item.text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}>
                                        {item.text}</Link></li>
                            })}
                        </ul>
                    </div>
                    <div className='md:hidden text-3xl ' onClick={() => setMenu(!menu)}>
                        {menu ? <IoMdClose /> : <MdMenu />}
                    </div>
                </div>
                {/* mobile navbar */}
                {menu && <div className='bg-white max-w-screen-2xl'>
                    <ul className='md:hidden flex flex-col items-center justify-center h-screen  cursor-pointer space-y-3' >
                        {navItems.map((item)=>{
                                return <li key={item.id} className='hover:scale-105 duration-200 cursor-pointer text-2xl font-semibold'>
                                    <Link 
                                    onClick={() => setMenu(!menu)}
                                    to={item.text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}>
                                        {item.text}</Link></li>
                            })}
                    </ul>
                </div>}
            </div>
        </>
    )
}

export default Navbar