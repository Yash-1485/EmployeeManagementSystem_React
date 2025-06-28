import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className="taskCard bg-green-600 h-full w-[300px] rounded-xl flex-shrink-0 p-5">
            <div className="flex justify-between items-center">
                <h3 className='text-sm font-medium bg-rose-700/80 px-2 py-1 rounded-md'>{data.category}</h3>
                <h3 className='text-sm'>{data.taskDate}</h3>
            </div>
            <h2 className="mt-5 font-bold text-2xl">{data.taskTitle}</h2>
            <p className="text-sm mt-2">
                {data.taskDescription}
            </p>
            <div className="mt-4">
                <button type="button" className="w-full bg-green-500/50 rounded-md text-sm font-medium px-2 py-1 shadow-[0_0_15px_rgba(10,10,10,0.35)]">Complete Task</button>
            </div>
        </div>
    )
}

export default CompleteTask
