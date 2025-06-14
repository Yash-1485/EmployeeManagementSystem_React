import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
    return (
        <div className='bg-zinc-800 h-screen p-12'>
            <Header />
            <TaskListNumber />
            <TaskList />
        </div>
    )
}

export default EmployeeDashboard
