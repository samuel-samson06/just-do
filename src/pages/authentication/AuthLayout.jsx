import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <React.Fragment>
      <nav className=" flex justify-around py-3 font-medium  ">
        <NavLink to={"/login"}><p className={" auth uppercase"}>Login</p></NavLink>
        <NavLink to={"/signup"}><p className={"auth uppercase"}>Sign-Up</p></NavLink>
      </nav>
      <div>
        <Outlet/>
      </div>
    </React.Fragment>
  )
}

export default AuthLayout