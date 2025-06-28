import React, { useEffect, useState } from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({changeUser,data}) => {

    const [impData,setImpData]=useState(null);

    useEffect(()=>{
        const storedData = localStorage.getItem("data");
        if (storedData) {
            setImpData(JSON.parse(storedData));
        } else if (data) {
            setImpData(data);
            localStorage.setItem("data", JSON.stringify(data));
        }
        // console.log(JSON.stringify(data));
    },[data])

    return (
        <div className='bg-zinc-800 h-screen p-12'>
            <Header changeUser={changeUser} data={impData} />
            <TaskListNumber data={impData}/>
            <TaskList data={impData}/>
        </div>
    )
}

export default EmployeeDashboard
