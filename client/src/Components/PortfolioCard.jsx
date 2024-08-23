import React from 'react'
import { Link } from 'react-router-dom';

function PortfolioCard() {
    return (
        <div data-aos="fade-down    "
             className='px-5 lg:p-5 text-white w-[80vw] lg:w-[30vw] backdrop-blur-md border border-gray-500 select-none rounded-2xl my-20 lg:my-[200px] hover:scale-110 transition-all delay-100 hover:border-white shadow-lg portfolio-card'>
            <h3 className="text-4xl lg:text-6xl font-bold py-3 border-2 border-transparent border-b-gray-400 ">
                Portfolio
            </h3>
            <h3 className="text-xl lg:text-2xl py-3 border-2 border-transparent border-b-gray-400">
                Sk Nadim
            </h3>
            <h3 className="text-xl lg:text-2xl py-3">MERN Stack Developer</h3>
            <Link  to='/admin'>Admin Panel</Link>
        </div>
    )
}

export default PortfolioCard
