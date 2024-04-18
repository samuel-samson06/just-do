import React, { useContext } from 'react'
import { Context } from '../../context/Context'

function Remainder() {
  const {remainder,setRemainder}=useContext(Context)


  const handleRemainder = ()=>{
    setRemainder(!remainder)
  }

  return (
    <React.Fragment>
        <div  className={` flex justify-between px-3 pt-5  pb-3 font-semibold border-b-[1px] mx-1 border-black`}>
            <p>Remainder:</p>
            <div onClick={handleRemainder} className={` transition-all border-[1px] border-black ${remainder?'bg-green-400':'bg-slate-300'} w-16 rounded-full`}>
                <div className={`transition-all ${remainder?'bg-gray-200':'bg-gray-400'} w-6 transition-all text-transparent ${remainder?'translate-x-[34px]':'translate-x-0'} ml-0.5 my-0.5 rounded-full`}>
                    .    
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Remainder