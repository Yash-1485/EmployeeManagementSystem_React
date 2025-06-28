import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTasks from '../other/AllTasks'

const AdminDashboard = ({changeUser,data}) => {
    return (
        <div className='h-screen w-full p-12'>
            <Header changeUser={changeUser} data={data}/>
            <CreateTask data={data}/>
            <AllTasks data={data}/>
        </div>
    )
}

export default AdminDashboard
