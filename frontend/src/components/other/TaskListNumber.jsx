const TaskListNumber = ({data}) => {

    if (!data || !data.taskCount) {
        return <p className="text-white text-xl">Loading task stats...</p>;
    }

    return (
        <div className='flex justify-between mt-10 gap-5'>
            <div className="bg-rose-600 w-[35%] px-10 py-6 rounded-xl">
                <h2 className="text-3xl font-bold">{data.taskCount.failed}</h2>
                <h3 className="text-2xl font-semibold">Failed Task</h3>
            </div>
            <div className="bg-green-600 w-[35%] px-10 py-6 rounded-xl">
                <h2 className="text-3xl font-bold">{data.taskCount.completed}</h2>
                <h3 className="text-2xl font-semibold">Completed Task</h3>
            </div>
            <div className="bg-blue-600 w-[35%] px-10 py-6 rounded-xl">
                <h2 className="text-3xl font-bold">{data.taskCount.active}</h2>
                <h3 className="text-2xl font-semibold">Active Task</h3>
            </div>
            <div className="bg-yellow-500 w-[35%] px-10 py-6 rounded-xl">
                <h2 className="text-3xl font-bold">{data.taskCount.newTask}</h2>
                <h3 className="text-2xl font-semibold">New Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumber
