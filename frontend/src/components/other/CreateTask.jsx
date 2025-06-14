import React from 'react'

const CreateTask = () => {
    return (
        <div className='p-5 bg-zinc-800 mt-8 rounded'>
            <form className='flex justify-between w-full items-start gap-5 flex-wrap'>
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <div>
                        <label htmlFor="title" className='mb-1 ml-1 text-gray-500 text-md block'>Task Title</label>
                        <input type="text" name="title" id="title" placeholder='Make a React Project' required className='mb-1 bg-transparent outline-none border-2 border-teal-600 px-3 py-2 w-full md:w-4/5 rounded-xl placeholder:text-gray-400' />
                    </div>
                    <div>
                        <label htmlFor="date" className='mb-1 ml-1 text-gray-500 text-md block'>Date</label>
                        <input type="date" name="date" id="date" required className='mb-1 bg-transparent outline-none border-2 border-teal-600 px-3 py-2 w-full md:w-4/5 rounded-xl placeholder:text-gray-400' />
                    </div>
                    <div>
                        <label htmlFor="assign" className='mb-1 ml-1 text-gray-500 text-md block'>Assign to</label>
                        <input type="text" name="assign" id="assign" placeholder='employee name' required className='mb-1 bg-transparent outline-none border-2 border-teal-600 px-3 py-2 w-full md:w-4/5 rounded-xl placeholder:text-gray-400' />
                    </div>
                    <div>
                        <label htmlFor="category" className='mb-1 ml-1 text-gray-500 text-md block'>Category</label>
                        <input type="text" name="category" id="category" placeholder='Web Development, Video Editing, ...' required className='mb-1 bg-transparent outline-none border-2 border-teal-600 px-3 py-2 w-full md:w-4/5 rounded-xl placeholder:text-gray-400' />
                    </div>

                </div>
                <div className="flex w-full md:w-2/5 flex-col itms-start">
                    <label htmlFor="description" className='mb-0.5 text-gray-500 text-md'>Description</label>
                    <textarea name="description" id="description" rows="10" className='ml-1 mb-1 w-full h-full bg-transparent outline-none border-2 border-teal-600 px-3 py-2 rounded-xl placeholder:text-gray-400'></textarea>
                    <button type="button" className='px-4 py-2 bg-teal-600 hover:bg-teal-600/90 mt-2 transition-all border-none rounded-sm text-lg font-semibold shadow-[0_0_15px_rgba(100,100,100,0.1)]'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
