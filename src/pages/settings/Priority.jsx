import React, { useContext } from 'react'
import { Context } from '../../context/Context';

function Priority() {
  const {setPriority} = useContext(Context)
  
  function handlePriority(e){
    setPriority(e.target.value);
  }

  return (
    <React.Fragment>
        <main className='flex justify-between px-3 pb-3  pt-5 font-semibold border-b-[1px] mx-1 border-black'>
          <p>Priority</p>
          <select name="" onChange={handlePriority} className=" border-[1px] border-black rounded ">
            <option value="low" >Low</option>
            <option value="medium">Medium</option>
            <option value="high" >High</option>
          </select>
        </main>
    </React.Fragment>
  )
}

export default Priority