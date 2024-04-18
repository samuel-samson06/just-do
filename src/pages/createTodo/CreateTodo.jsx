import React, { useContext } from 'react'
import { Context } from '../../context/Context'



function CreateTodo() {
    const {theme} = useContext(Context)
  return (
    <React.Fragment>
        <header className={`${theme} py-1 font-semibold text-white justify-between flex  px-3`}>
          <button className=' text-2xl font-bold'>←</button>
          <button>Done</button>
        </header>
        <form action="" method="post">
            <section className='px-3 py-3 gap-2'>
                <input type="text" placeholder='Subject Name' name="" className=' px-2 placeholder:font-medium bg-gray-100 w-full border-black border-[1px] outline-none rounded-md' id="" />
            </section>
            <div>
                <p className=' text-center underline font-semibold uppercase text-lg'>Create Tasks</p>
                <section className=' flex flex-col px-5 py-2 gap-2'>
                    <input type="text" placeholder='Task Name' name="" className=' px-2 placeholder:font-medium bg-gray-100 w-full border-black border-[1px] outline-none rounded-md' id="" />
                    <div className=' grid grid-cols-2 gap-5'>
                        <select name="" className=' border-[1px] bg-gray-100 font-medium border-black outline-none rounded-md' id="">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                        <select name="" className=' border-[1px] bg-gray-100 font-medium border-black outline-none rounded-md' id="">
                            <option value="work">Work</option>
                            <option value="personal">Personal</option>
                            <option value="health">Health & Fitness</option>
                            <option value="finances">Finances</option>
                            <option value="events">Events</option>
                        </select>
                    </div>
                        <button className={`${theme} text-white font-semibold  rounded-md `}>Add Task</button>
                </section>

            </div>
        </form>
    </React.Fragment>
  )
}

export default CreateTodo