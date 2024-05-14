import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'



function AuthLayout() {
  const location = useLocation()
  return (
    <React.Fragment>
      <div className=' mt-16 md:bg-gray-100 md:flex md:flex-col sm:px-20  md:justify-center md:h-screen'>
        <nav className=" flex justify-around  py-3 font-medium  ">
          <NavLink to={"/login"}><p className={`${location.pathname.split("/")[1]==="login" && "border-b-[2px] border-black"} uppercase`}>Login</p></NavLink>
          <NavLink to={"/signup"}><p className={`${location.pathname.split("/")[1]==="signup" && " border-b-[2px] border-black"} uppercase`}>Sign-Up</p></NavLink>
        </nav>
        <div className=' md:mt-0 mt-20'>
          <Outlet/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AuthLayout