import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-blue-300 rounded-xl p-5'>
          <div className='flex items-center justify-between'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm '>{data.taskDate}</h4>
          </div>
          <h3 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h3>
          <p className='text-sm mt-2 '>{data.taskDescription}</p>
          <div className='mt-2 flex justify-between '>
            <button className='w-full bg-green-500 rounded px-2 py-1 mr-2 text-sm'>Mark as Completed</button>
            <button className='w-full bg-red-500 rounded px-2 py-1 text-sm'>Mark as Failed</button>
          </div>
    </div>
  )
}

export default NewTask