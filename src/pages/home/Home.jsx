import React, { useContext } from 'react'
import {todoRefrenceArray} from "../../fakeArrayJs/todoArray"
import { Context } from '../../context/Context';
import {NavLink} from "react-router-dom"

function Home() {
  const {priority} = useContext(Context)
  return (
    <React.Fragment>
      <div className=' mt-10 sm:mt-0 flex flex-col min-h-screen bg-gray-100'>
        <p className=' pt-5 font-semibold text-xl underline text-center'>Order of Priority </p>
        <br />
        <div className=' pt-1 mb-4 pb-5 px-5 flex flex-col gap-3 '>
          {
            todoRefrenceArray.map((eachTodoObj)=>{
              let color;
              if (eachTodoObj.priority==="low"){
                color = " text-green-500"
              }else if(eachTodoObj.priority==="medium"){
                color = " text-yellow-500"
              }else{
                color = "text-red-500"
              }
              if(eachTodoObj.priority===priority){
              return (
                <NavLink to={`/${eachTodoObj.id}`} key={eachTodoObj.id}>
                  <div className=' bg-white py-2 px-3 rounded-sm'>
                    <p className=' font-semibold'>{eachTodoObj.task_name}</p>
                    <section className=' text-sm flex justify-between'>
                      <p className=' font-semibold text-xs'><span className=' text-xs'>Date:</span> {eachTodoObj.date}</p>
                      <p className={`${color} uppercase font-semibold`}>{eachTodoObj.priority}</p>
                    </section>
                  </div>
                </NavLink>
              )}
            })
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home