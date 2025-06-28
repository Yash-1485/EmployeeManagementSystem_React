import React, { useContext } from 'react'
import { AuthData } from '../../contexts/AuthProvider';

const AllTasks = () => {

    const [authData,setAuthData]=useContext(AuthData);

    if(!authData){
        return <>
            <div className="bg-zinc-800 w-full p-5 mt-5 overflow-auto h-46 text-center">
                <h1 className="text-md font-medium">Tasks are loading....</h1>
            </div>
        </>
    }
    return (
        <div id='allTask' className='bg-zinc-800 w-full p-3 mt-3 h-52 mb-5 overflow-clip'>
            <div className="bg-emerald-600/90 px-4 py-3 rounded-md mb-2 flex justify-between font-medium">
                <h2 className="w-1/6">Employee Name</h2>
                <h2 className="w-1/6">New Task</h2>
                <h2 className="w-1/6">Active</h2>
                <h2 className="w-1/6">Completed</h2>
                <h2 className="w-1/6">Failed</h2>
                <h2 className="w-1/6">Total</h2>
            </div>
            <div className="max-h-[80%] overflow-auto py-2">
                {authData.employees.map((task,idx)=>{
                    return <div className="border-2 border-emerald-600/90 px-4 py-3 rounded-md mb-2 flex justify-between font-semibold" key={idx}>
                        <h2 className="w-1/6">{task.name}</h2>
                        <h2 className="w-1/6">{task.taskCount.newTask}</h2>
                        <h2 className="w-1/6">{task.taskCount.active}</h2>
                        <h2 className="w-1/6">{task.taskCount.completed}</h2>
                        <h2 className="w-1/6">{task.taskCount.failed}</h2>
                        <h2 className="w-1/6">{task.taskCount.total}</h2>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTasks
