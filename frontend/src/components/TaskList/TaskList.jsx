import React from 'react'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'
import ActiveTask from './ActiveTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {

    if (!data || !data.tasks) {
        return <p className="text-white text-xl">Loading task...</p>;
    }

    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto w-full flex mt-10 py-5 justify-start items-center gap-5 flex-nowrap'>
            {
                data.tasks.map((task,idx)=>{
                    if(task.active){
                        return <ActiveTask key={idx} data={task}/>
                    }
                    if(task.failed){
                        return <FailedTask key={idx} data={task}/>
                    }
                    if(task.completed){
                        return <CompleteTask key={idx} data={task}/>
                    }
                    if(task.newTask){
                        return <NewTask key={idx} data={task}/>
                    }
                })
            }
        </div>
    )
}

export default TaskList
