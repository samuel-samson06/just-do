import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Search from "../layout/header/Search"
import {todoRefrenceArray} from "../../fakeArrayJs/todoArray"
import { Context } from '../../context/Context'
function TodoPage() {
  const {theme} = useContext(Context)
  return (
    <React.Fragment>
      <div className=' flex flex-col min-h-screen bg-gray-100'>
      <div className={` ${theme} pb-3 pt-2 pl-4`}>
        <Search/>
      </div>
        <br />
        <div className='pt-1 mb-4 pb-5 px-5 flex flex-col gap-3 '>
          <p className={` text-2xl font-semibold flex flex-col text-white justify-center items-center fixed bottom-14 right-8 ${theme} w-fit rounded-full px-2`}>
            <NavLink to={"/create"}>+</NavLink>
          </p>
            {
              todoRefrenceArray.map(function(eachTodoObj){
                let color;
                  if (eachTodoObj.priority==="low"){
                    color = " text-green-500"
                  }else if(eachTodoObj.priority==="medium"){
                    color = " text-yellow-500"
                  }else{
                    color = "text-red-500"
                  }
                return(
                  <NavLink to={`/${eachTodoObj.id}`} key={eachTodoObj.id}>
                      <div className=' bg-white py-2 px-3 rounded-sm'>
                        <p className=' font-semibold'>{eachTodoObj.task_name}</p>
                        <section className=' text-sm flex justify-between'>
                          <p className=' font-semibold text-xs'><span className=' text-xs'>Date:</span> {eachTodoObj.date}</p>
                          <p className={`${color} uppercase font-semibold`}>{eachTodoObj.priority}</p>
                        </section>
                      </div>
                    </NavLink>
                )
              })
            }
        </div>
      </div>
    </React.Fragment>
  )
}

export default TodoPage