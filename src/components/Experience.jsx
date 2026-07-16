import React from 'react'
import PortfolioCard from './PortfolioCard'

const Experience = () => {
    const cardItem = [
        { id: 1, img: "https://static.vecteezy.com/system/resources/thumbnails/001/416/705/small/html5-emblem-orange-shield-and-white-text-vector.jpg", name: "HTML" },
        { id: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdpfV3CLskl_9PApTzFCr4M5A7QYot2lw7mQ&s", name: "Javasript" },
        { id: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC2AO8Shntg7NvCXmGgWxC70C2Qzgj_JsRAA&s", name: "Oracle" },
        { id: 4, img: "https://cdn-icons-png.flaticon.com/512/919/919826.png", name: "CSS" },
        { id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNou7-DlVcN5nOVq73_RDi6OAYZAzOknfzQw&s", name: "Spring Boot" },
        { id: 6, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/960px-Spring_Boot.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail", name: "Spring" }
    ]
    return (
        <div name='Experience' className='max-w-screen container mx-auto my-16 md:px-20 px-4'>
            <h1 className='text-3xl font-bold mb-4'>Experience</h1>
            <span className=''>I have more than 2 years exprience in below technology</span>
            <div className='flex space-x-2 grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                {cardItem.map((item) => {
                    return(
                        <div key={item.id} className='p-2 flex flex-col items-center justify-center md:w-[200px] md:h-[200px] shadow-lg cursor-pointer border-gray-500 rounded-full hover:scale-95 duration-300'>
                            <img src={item.img} alt="" className='w-[150px] h-[100px] rounded-full border-gray-400' />
                            <h1 className='text-xl font-semibold mb-2 px-2'>{item.name}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Experience