import React from 'react'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
  return (
    <div name='Portfolio' className='max-w-screen container mx-auto mt-10 md:px-20 px-4'>
        <h1 className='text-3xl font-bold mb-4'>Portfolio</h1>
        <span className='underline font-semibold'>Featured Projects</span>
        <div className='flex space-x-2 grid grid-cols-1 md:grid-cols-4 gap-3 my-4'>
            <PortfolioCard img="https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png" heading="MongoDB"/>
            <PortfolioCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmtAv2G_LoVvYzVphgkaW6W1yj3z0tR7igw&s" heading="Express"/>
            <PortfolioCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s" heading="React"/>
            <PortfolioCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s" heading="Node"/>
            <PortfolioCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZWkwcHK_g5_g3yZpEu9W-4bWwpX4wzzWBA&s" heading="Java"/>
            <PortfolioCard img="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png" heading="Python"/>
        </div>
    </div>
  )
}

export default Portfolio