/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import BackComponent from './BackComponent'
import { Context } from '../../../context/Context'

function OtherComponents({header}) {

  const {theme}=useContext(Context)


  return (
    <React.Fragment>
        <div >
            <header className={`  justify-between items-center py-1 px-2 flex ${theme} text-white font-semibold`}>
                <BackComponent/>
                <p className=' uppercase'>{header}</p>
                <p className=' text-transparent opacity-0'>k</p>
            </header>
            <div>
                <Outlet/>
            </div>
            
        </div>
    </React.Fragment>
  )
}

export default OtherComponents