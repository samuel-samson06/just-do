import React from 'react'
import { useParams } from 'react-router-dom'
import { todoRefrenceArray } from '../../fakeArrayJs/todoArray'

function Todo() {

    const {id} = useParams()
    // FILTRERING THE TASKS BASED OFF USERS SELECTION AND USER PARAMS AUTOMATE ID
    const filtered=todoRefrenceArray.filter((eachTodo)=>{
        return eachTodo.id===id
    })
    
    function handleCheck(task_id){
        alert(task_id)
    }
    
  return (
    <React.Fragment>
        <div>
            {
                filtered.map((todo)=>{
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
                            {/* MAPPING THROUGH TH RTASKS IN THE FAKE ARRAY */}
                            <div className=' flex flex-col gap-3 px-5 py-3 font-semibold'>
                                {todo.tasks.map(function(task){
                                    return (
                                        <div key={task.id} className='flex items-center gap-3'>
                                            <input type="checkbox" id='' onClick={function(){
                                                handleCheck(task.id)
                                            }}  name="" className=" accent-blue-400" />
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