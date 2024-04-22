import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/Context';
import {todoRefrenceArray} from "../../fakeArrayJs/todoArray";
import {CiTrash} from "react-icons/ci"
import { useNavigate } from 'react-router-dom';



// READ CODE COMMENTS FOR UNDERSTANDING
function CreateTodo() {
    // Gets Selected THEME
    const {theme} = useContext(Context);
    const navigate = useNavigate()

    const [namesInput, setNamesInput] = useState({subject:'',task:''})
    const [emptyFiledTrigger, setEmptyFiledTrigger] = useState(false)
    const [selectOptions, setSelectOptions] = useState({priority:'low',organization:'personal'})
    const [listOfTodos, setListOfTodos] = useState([])
    // UseEffect To display field that are empty
    useEffect(function(){
        const timer = setTimeout(function(){
            setEmptyFiledTrigger(false)
        },3000)

        return(function(){
            clearTimeout(timer)
        })
    },[emptyFiledTrigger])
    // Functions
    // Handles Input entries
    const handleInputField = (e)=>{
        e.preventDefault()
        setNamesInput({...namesInput,[e.target.name]:e.target.value})
    }
    // Handles option Selection 
    const handleOptions = (e)=>{
        setSelectOptions({...selectOptions,[e.target.name]:e.target.value})
    }
    // Creates the folder for the General Array of all tasks
    const handleCreateTaskCollection = (e)=>{
        e.preventDefault()
    }
    // Creates each tasks that would be added to a task folder
    const handleAddTask = (e)=>{
        e.preventDefault()
        const dateInstance = new Date()
        const timeStampId = dateInstance.getTime()
        if(namesInput.subject==="" || namesInput.task===""){
            setEmptyFiledTrigger(true)
        }else{
            const task = {task_name:namesInput.task,isComplete:false,id:timeStampId}
            setListOfTodos(function(prev){
                return([...prev,task])
            })
            setNamesInput({...namesInput,task:''})
            console.log(todoRefrenceArray[0].tasks);
            console.log(listOfTodos);
        }
    }
    // Used to deleted an unwanted task
    const deleteTask = (id)=>{
        
        console.log(id);
    }
    
    return (
        <React.Fragment>
        <header className={`${theme} py-1 font-semibold text-white justify-between flex  px-3`}>
          <button onClick={function(){
            navigate(-1)
          }}  className=' text-2xl font-bold'>←</button>
          <button onClick={handleCreateTaskCollection}>Done</button>
        </header>
        <form action="" method="">
            <section className='px-3 py-3 gap-2'>
                <input type="text" onChange={handleInputField} name="subject" value={namesInput.subject} placeholder='Subject Name'  className=' px-2 py-1 placeholder:font-medium bg-gray-100 w-full border-black border-[1px] outline-none rounded-md' id="" />
                <p className={`${namesInput.subject.length===0 && emptyFiledTrigger?'block':'hidden'} text-red-500 text-xs font-semibold px-3 py-1`}>This input field is required</p>
            </section>
            <br />
            <div>
                <p className=' text-center underline font-semibold uppercase text-lg'>Create Tasks</p>
                <section className=' flex flex-col px-5 py-3 gap-2'>
                    <section>
                        <input type="text" onChange={handleInputField} name="task" value={namesInput.task} placeholder='Task Name'  className=' p-2 placeholder:font-medium bg-gray-100 w-full border-gray-700 border-[1px] outline-none rounded-md' id="" />
                        <p className={`${namesInput.task.length===0 && emptyFiledTrigger?'block':'hidden'} text-red-500 text-xs font-semibold px-3 py-1`}>This input field is required</p>
                    </section>
                    <div className=' grid grid-cols-2 py-3 gap-5'>
                        <select name="priority" onChange={handleOptions} className=' border-[1px] p-1 text-gray-600 bg-gray-100 font-medium border-gray-700 outline-none rounded-md' id="">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                        <select  name="organization" onChange={handleOptions} className=' border-[1px] p-1 text-gray-600 bg-gray-100 font-medium border-gray-700 outline-none rounded-md' id="">
                            <option value="personal">Personal</option>
                            <option value="work">Work</option>
                            <option value="health">Health & Fitness</option>
                            <option value="finances">Finances</option>
                            <option value="events">Events</option>
                        </select>
                    </div>
                        <button onClick={handleAddTask} className={`${theme} p-1 text-white font-semibold  rounded-md `}>Add Task</button>
                </section>
                <div>
                    {
                        listOfTodos.length===0?<p className=' font-semibold text-center'>You Have No Tasks Here</p>:
                        <div className=' flex flex-col gap-2'>
                            {
                                listOfTodos.map(function(eachCreatedTask){
                                    return(
                                        <div key={eachCreatedTask.id} className=' justify-between flex items-center bg-gray-100 py-2 mx-2 px-2 rounded-md'>
                                            <p className=' font-semibold text-sm'>{eachCreatedTask.task_name}</p>
                                            <button onClick={function(){deleteTask(eachCreatedTask.id)}}><CiTrash className=' text-red-600 text-2xl '/></button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        </form>
    </React.Fragment>
  )
}

export default CreateTodo