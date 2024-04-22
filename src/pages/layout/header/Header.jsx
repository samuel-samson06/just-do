import React, { useContext } from 'react'
import {MdSettings} from "react-icons/md"
import {today} from "../../utils/today"
import { NavLink } from 'react-router-dom'
import { Context } from '../../../context/Context'

function Header() {
  const {theme}= useContext(Context)
  return (
    <React.Fragment>
      <div className={` py-2 px-2 ${theme}`}>
        <header className='px-1 py-2 items-center flex justify-between '>
          <NavLink to={"/settings"}>
            <MdSettings className=' text-xl text-white'/>
          </NavLink>
        <main className='text-white text-xs flex items-center justify-between font-semibold uppercase'>
          <p className=' font-medium text-white text-sm capitalize'>{today} </p>
          
        </main>
        </header>

      </div>
    </React.Fragment>
  )
}

export default Header