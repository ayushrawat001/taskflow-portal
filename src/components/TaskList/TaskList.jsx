import React from 'react'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start w-full py-5 px-2 gap-5 flex-nowrap'>
        {data.tasks.map((elem,idx)=>{
          if(elem.newTask){
            return <NewTask data={elem} key={idx}/>
          }
          if(elem.completed){
            return <CompleteTask data={elem} key={idx}/>
          }
          if(elem.active){
            return <AcceptTask data={elem} key={idx}/>
          }
          if(elem.failed){
            return <FailedTask data={elem} key={idx}/>
          }
        })}
       

    </div>
  )
}

export default TaskList