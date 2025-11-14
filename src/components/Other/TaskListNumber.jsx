import React from 'react'

const TaskListNumber = ({data}) => {
    // console.log(data);
    
  return (
    <>
    <div className='flex screen justify-between gap-5 mt-10'>

        <div className='rounded-xl w-[45%] py-6 px-9 bg-red-300'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-300'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-2xl font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-green-300'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-2xl font-medium'>Accepted Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-200'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-2xl font-medium'>Failed Task</h3>
        </div>


    </div>
    
    </>
  )
}

export default TaskListNumber