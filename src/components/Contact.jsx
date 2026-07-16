import React from 'react'

const Contact = () => {
  return (
    <>
    <div name="Contact" className='container mx-auto max-w-screen-2xl px-4 md:px-20 my-16 '>
        <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className='flex justify-center mt-6'>
            <form action="" className='bg-slate-200 w-90 px-8 py-6 rounded-2xl'>

                <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                <div className='flex flex-col items-center space-y-5'>
                <div className=''>
                    <label className='block text-gray-700'>FullName</label>
                    <input type="text" placeholder='Enter your name' className='outline-none bg-gray-100 py-1 px-3 rounded-lg text-gray-700 appearence-none' />
                </div>

                <div>
                    <label className='block text-gray-700'>Email Address</label>
                    <input type="text" placeholder='Enter your email' className='outline-none bg-gray-100 py-1 px-3 rounded-lg text-gray-700 appearence-none' />
                </div>

                <div>
                    <label className='block text-gray-700'>Message</label>
                    <textarea type="text" placeholder='Enter your message' className='outline-none bg-gray-100 py-1 px-3 rounded-lg text-gray-700 w-56 ' />
                </div>
                <button className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
                </div>

            </form>
        </div>
    </div>
    </>
  )
}

export default Contact