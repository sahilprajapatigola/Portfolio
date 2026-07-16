import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <hr />
            <footer className='py-12'>
                <div className='container max-w-screen-2xl mx-auto px-4 md:px-20'>
                    <div className='flex flex-col items-center '>
                        <div className='flex space-x-4 '>
                            <FaSquareFacebook size={24} />
                            <FaLinkedin size={24} />
                            <FaTwitter size={24} />
                            <FaSquareInstagram size={24} />
                        </div>
                        <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                            <p className='text-sm'>&copy;2024 Your Company. All right reserved</p>
                            <p className='text-sm'>Supportive Partner Sahil Prajapati</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer