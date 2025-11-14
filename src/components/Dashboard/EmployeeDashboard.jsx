import React from 'react'
import Header from '../Other/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNumber from '../Other/TaskListNumber'

const EmployeeDashboard = ({data}) => {
  // console.log(data)
  return (
        <div className='p-10 bg-[#1c1c1c] h-screen'>
          <Header data = {data}/>
          <TaskListNumber data = {data}/>
          <TaskList data = {data}/>
          
        </div>
  )
}

export default EmployeeDashboard