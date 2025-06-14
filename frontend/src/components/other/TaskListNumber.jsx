import React from 'react'

const TaskListNumber = () => {
    return (
        <div className='flex justify-between mt-10 gap-5'>
            <div className="bg-rose-600 w-[35%] px-10 py-6 rounded-xl">
                <h2 className="text-3xl font-bold">0</h2>
                <h3 className="text-2xl font-semibold">New Task</h3>
            </div>
            <div className="bg-green-600 w-[35%] px-10 py-6 rounded-xl">
                <h2 className="text-3xl font-bold">0</h2>
                <h3 className="text-2xl font-semibold">New Task</h3>
            </div>
            <div className="bg-blue-600 w-[35%] px-10 py-6 rounded-xl">
                <h2 className="text-3xl font-bold">0</h2>
                <h3 className="text-2xl font-semibold">New Task</h3>
            </div>
            <div className="bg-yellow-500/90 w-[35%] px-10 py-6 rounded-xl">
                <h2 className="text-3xl font-bold">0</h2>
                <h3 className="text-2xl font-semibold">New Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumber
