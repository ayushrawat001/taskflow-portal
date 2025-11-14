import React from 'react'

const CompleteTask = ({data}) => {
  return (
     <div className='flex-shrink-0 h-full w-[300px] bg-yellow-300 rounded-xl p-5'>
          <div className='flex items-center justify-between'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm '>{data.taskDate}</h4>
          </div>
          <h3 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h3>
          <p className='text-sm mt-2 '>{data.taskDescription}</p>
          <div className='mt-2'>
            <button className='w-full bg-green-400'>Complete</button>
          </div>
    </div>
  )
}

export default CompleteTask