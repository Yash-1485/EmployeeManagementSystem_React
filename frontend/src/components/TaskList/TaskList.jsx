import React from 'react'

const TaskList = () => {
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto w-full flex mt-10 py-5 justify-start items-center gap-5 flex-nowrap'>
            <div className="taskCard bg-rose-600 h-full w-[300px] rounded-xl flex-shrink-0 p-5">
                <div className="flex justify-between items-center">
                    <h3 className='text-sm font-medium bg-rose-700/80 px-2 py-1 rounded-md'>High</h3>
                    <h3 className='text-sm'>14 Jun, 2025</h3>
                </div>
                <h2 className="mt-5 font-bold text-2xl">Make a Full Stack Project</h2>
                <p className="text-sm mt-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ad, fuga quisquam ea ipsam repudiandae exercitationem quasi cupiditate pariatur, debitis nemo? Unde est autem aperiam ab sed, eos quod ipsam?
                </p>
            </div>
            <div className="taskCard bg-green-600 h-full w-[300px] rounded-xl flex-shrink-0 p-5">
                <div className="flex justify-between items-center">
                    <h3 className='text-sm font-medium bg-rose-700/80 px-2 py-1 rounded-md'>High</h3>
                    <h3 className='text-sm'>14 Jun, 2025</h3>
                </div>
                <h2 className="mt-5 font-bold text-2xl">Make a Full Stack Project</h2>
                <p className="text-sm mt-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ad, fuga quisquam ea ipsam repudiandae exercitationem quasi cupiditate pariatur, debitis nemo? Unde est autem aperiam ab sed, eos quod ipsam?
                </p>
            </div>
            <div className="taskCard bg-blue-600 h-full w-[300px] rounded-xl flex-shrink-0 p-5">
                <div className="flex justify-between items-center">
                    <h3 className='text-sm font-medium bg-rose-700/80 px-2 py-1 rounded-md'>High</h3>
                    <h3 className='text-sm'>14 Jun, 2025</h3>
                </div>
                <h2 className="mt-5 font-bold text-2xl">Make a Full Stack Project</h2>
                <p className="text-sm mt-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ad, fuga quisquam ea ipsam repudiandae exercitationem quasi cupiditate pariatur, debitis nemo? Unde est autem aperiam ab sed, eos quod ipsam?
                </p>
            </div>
            <div className="taskCard bg-yellow-500/90 h-full w-[300px] rounded-xl flex-shrink-0 p-5">
                <div className="flex justify-between items-center">
                    <h3 className='text-sm font-medium bg-rose-700/80 px-2 py-1 rounded-md'>High</h3>
                    <h3 className='text-sm'>14 Jun, 2025</h3>
                </div>
                <h2 className="mt-5 font-bold text-2xl">Make a Full Stack Project</h2>
                <p className="text-sm mt-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ad, fuga quisquam ea ipsam repudiandae exercitationem quasi cupiditate pariatur, debitis nemo? Unde est autem aperiam ab sed, eos quod ipsam?
                </p>
            </div>
        </div>
    )
}

export default TaskList
