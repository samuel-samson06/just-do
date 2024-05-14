import React, {  useContext } from 'react'
import {MdHomeFilled} from "react-icons/md"
import {LuListTodo} from "react-icons/lu"
import {FcAbout} from "react-icons/fc"
import { NavLink } from 'react-router-dom'
import {IoPersonCircleOutline} from "react-icons/io5"
import { Context } from '../../context/Context'
import {MdSettings} from "react-icons/md"


function Navigation() {
  const {theme} = useContext(Context)
  return (
    <React.Fragment>
        <div className={` w-full bottom-0 md:fixed md:w-3/12 md:flex-col md:border-r-[4px] md:border-gray-200 md:h-screen md:gap-12 md:pt-5 fixed flex md:justify-normal justify-evenly text-2xl py-2 ${theme} text-white`}>
          <NavLink to={"/"}>
            <div className=' px-5  w-full center items-center gap-5 flex self-start'>
              <MdHomeFilled />
              <p className=' hidden md:block md:text-lg'>Home</p>
            </div>
          </NavLink>
          <NavLink to={"/todos"}>
            <div className=' px-5  w-full center items-center gap-5 flex self-start'>
              <LuListTodo />
              <p className=' hidden md:block md:text-lg'>Todo</p>
            </div>
          </NavLink>
          <NavLink to={"/about"}>
            <div className=' px-5  w-full center items-center gap-5 flex self-start'>
              <FcAbout />
              <p className=' hidden md:block md:text-lg'>About Us</p>
            </div>
          </NavLink>
          <NavLink to={"/login"}>
            <div className=' px-5  w-full center items-center gap-5 flex self-start'>
              <IoPersonCircleOutline />
              <p className=' hidden md:block md:text-lg'>Account</p>
            </div>
          </NavLink>
          <NavLink to={"/settings"}>
            <div className=' max-md:hidden px-5  w-full center items-center gap-5 flex self-start'>
              <MdSettings />
              <p className=' hidden md:block md:text-lg'>Settings</p>
            </div>
          </NavLink>
        </div>
    </React.Fragment>
  )
}

export default Navigation