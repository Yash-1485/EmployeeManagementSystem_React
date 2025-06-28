import React, { useContext, useState } from 'react'
import { AuthData } from '../../contexts/AuthProvider';
import { setLocalStorage } from '../../utils/localStorage';

const CreateTask = () => {

    const [authData,setAuthData]=useContext(AuthData);

    const [taskTitle,setTaskTitle]=useState("");
    const [taskDescription,setTaskDescription]=useState("");
    const [taskDate,setTaskDate]=useState("");
    const [assignto,setAssignto]=useState("");
    const [category,setCategory]=useState("");

    const [newTask,setNewTask]=useState({});

    const handleSubmit=(e)=>{
        e.preventDefault();

        setNewTask({taskTitle,taskDescription,taskDate,assignto,category,active:false,newTask:true,completed:false,failed:false});
        
        const employeeData=authData.employees;
        employeeData.forEach((emp)=>{
            if(emp.name===assignto){
                emp.tasks.push(newTask);
                emp.taskCount.newTask+=1;
                emp.taskCount.total+=1;
            }
        })
        setAuthData({...authData,employees:employeeData});
        
        localStorage.setItem("employees",JSON.stringify(employeeData));

        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
        setAssignto('');
        setCategory('');
    }

    return (
        <div className='p-5 bg-zinc-800 mt-8 rounded'>
            <form className='flex justify-between w-full items-start gap-5 flex-wrap' onSubmit={handleSubmit}>
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <div>
                        <label htmlFor="taskTitle" className='mb-1 ml-1 text-gray-500 text-md block'>Task Title</label>
                        <input type="text" onChange={(e)=>{setTaskTitle(e.target.value)}} value={taskTitle} name="taskTitle" id="title" placeholder='Make a React Project' required className='mb-1 bg-transparent outline-none border-2 border-teal-600 px-3 py-2 w-full md:w-4/5 rounded-xl placeholder:text-gray-400' />
                    </div>
                    <div>
                        <label htmlFor="taskDate" className='mb-1 ml-1 text-gray-500 text-md block'>Date</label>
                        <input type="date" onChange={(e)=>{setTaskDate(e.target.value)}} value={taskDate} name="taskDate" id="date" required className='mb-1 bg-transparent outline-none border-2 border-teal-600 px-3 py-2 w-full md:w-4/5 rounded-xl placeholder:text-gray-400' />
                    </div>
                    <div>
                        <label htmlFor="assignto" className='mb-1 ml-1 text-gray-500 text-md block'>Assign to</label>
                        <input type="text" onChange={(e)=>{setAssignto(e.target.value)}} value={assignto} name="assignto" id="assign" placeholder='employee name' required className='mb-1 bg-transparent outline-none border-2 border-teal-600 px-3 py-2 w-full md:w-4/5 rounded-xl placeholder:text-gray-400' />
                    </div>
                    <div>
                        <label htmlFor="category" className='mb-1 ml-1 text-gray-500 text-md block'>Category</label>
                        <input type="text" onChange={(e)=>{setCategory(e.target.value)}} value={category} name="category" id="category" placeholder='Web Development, Video Editing, ...' required className='mb-1 bg-transparent outline-none border-2 border-teal-600 px-3 py-2 w-full md:w-4/5 rounded-xl placeholder:text-gray-400' />
                    </div>

                </div>
                <div className="flex w-full md:w-2/5 flex-col itms-start">
                    <label htmlFor="taskDescription" className='ml-1 mb-0.5 text-gray-500 text-md'>Description</label>
                    <textarea name="taskDescription" id="description" rows="10" className='mb-1 w-full h-full bg-transparent outline-none border-2 border-teal-600 px-3 py-2 rounded-xl placeholder:text-gray-400' onChange={(e)=>{setTaskDescription(e.target.value)}} value={taskDescription}></textarea>
                    <button type="submit" className='px-4 py-2 bg-teal-600 hover:bg-teal-600/90 mt-2 transition-all border-none rounded-sm text-lg font-semibold shadow-[0_0_15px_rgba(100,100,100,0.1)]'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
