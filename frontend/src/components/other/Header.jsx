import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className="text-xl font-medium">
                Hello <br /> <span className='text-3xl font-semibold'>Yash 👋</span>
            </h1>
            <button type="button" className='px-4 py-2 bg-rose-600 hover:bg-rose-600/90 transition-all border-none rounded-sm text-lg font-semibold shadow-[0_0_15px_rgba(100,100,100,0.1)]'>Log Out</button>
        </div>
    )
}

export default Header
