import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import useLocalStorage from 'use-local-storage'

function Theme() {
  const {setTheme} = useContext(Context)
  const [borderActive,setBorderActive]=useLocalStorage("borderIsActive",{green:true,red:false,purple:false})
  const {green,red,purple}=borderActive

  const greenThemeButton=()=>{
    setTheme("bg-green-400 ")
    setBorderActive({green:true,red:false,purple:false})
  }
  const redThemeButton=()=>{
    setTheme("bg-red-400")
    setBorderActive({...borderActive,green:false,red:true,purple:false})
  }
  const purpleThemeButton=()=>{
    setTheme("bg-purple-400 ")
    setBorderActive({...borderActive,green:false,red:false,purple:true})
  }
  return (
    <React.Fragment>
        <main className=' flex justify-between px-3 py-2 font-semibold border-b-[1px] mx-1 border-black'>
            <aside>Theme:</aside>
            <section className=' flex gap-2'>
                <div onClick={greenThemeButton} className={`${green && "border-blue-400"} w-6 rounded-full text-transparent border-[2px]  bg-green-400 `}>.</div>
                <div onClick={redThemeButton} className={`${red && "border-blue-400"} w-6 rounded-full text-transparent bg-red-400 border-[2px] `}>.</div>
                <div onClick={purpleThemeButton} className={`${purple && "border-blue-400"} w-6 rounded-full text-transparent bg-purple-400 border-[2px]`}>.</div>
            </section>
        </main>
    </React.Fragment>
  )
}

export default Theme