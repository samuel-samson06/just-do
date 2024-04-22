import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { todoRefrenceArray } from '../../fakeArrayJs/todoArray'

function Todo() {
    // FILTRERING THE TASKS BASED OFF USERS SELECTION AND USER PARAMS AUTOMATE ID

    const {id} = useParams()
// WHEN YOU SELECT A TASK THEN ON THE USEEFFECT RUN THIS UPDATES THE STATE TO THE TASK YOU SELECTED BASED OFF THE ID OF THE TASK IN ORDER TO SELECT A PARTICULAR TASK
    const [getFilteredTask, setGetFilteredTask] = useState([])
       
    useEffect(function(){
        const filtered=todoRefrenceArray.filter((eachTodo)=>{
            return eachTodo.id===id
        })
        setGetFilteredTask(filtered)
    },[id])

    function handleCheck(task_id){
        const all_tasks=getFilteredTask[0].tasks
        // console.log(all_tasks);
        const test = all_tasks.map(function(eachTask){
            if(eachTask.id===task_id){
                return({...eachTask,isComplete:!eachTask.isComplete}) 
            }else{
                return({...eachTask})
            }
        })
        console.log(test);
        setGetFilteredTask([{...getFilteredTask[0], tasks:test}]);
        
    }

    
    
  return (
    <React.Fragment>
        <div>
            {
                getFilteredTask.map((todo)=>{
                    // GETTTING THE TASKS FROM THE FILTRED ONE 
                    return(
                        <div key={todo.id}>
                            <div>
                                <section className={`  border-b-[1px] border-black grid grid-cols-2 justify-between font-semibold px-5 py-2 `}>
                                    <h1 className=' text-sm'><span className='text-xs'>Name:&nbsp;</span>{todo.task_name.length>15?todo.task_name.slice(0,10)+"...":todo.task_name}</h1>
                                    <h1 className=' text-sm'><span className=' text-xs'>Date Created:&nbsp;</span>{todo.date}</h1>
                                    <h1 className='text-sm capitalize'><span className=' text-xs'>Priority: </span>{todo.priority}</h1>
                                    <p className='text-sm capitalize'><span className=' text-xs'>Organization: </span>{todo.organization}</p>
                                </section>
                            </div>
                            {/* MAPPING THROUGH THE TASKS IN THE FAKE ARRAY */}
                            <div className=' flex flex-col gap-3 px-5 py-3 font-semibold'>
                                {todo.tasks.map(function(task){
                                    return (
                                        <div key={task.id} className='flex items-center gap-3'>
                                            <input type="checkbox" id='' onChange={function(){handleCheck(task.id)}} name="" checked={task.isComplete} className=" accent-blue-400" />
                                            <p>{task.task_name}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </React.Fragment>
  )
}

export default Todo