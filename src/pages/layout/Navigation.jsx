import React, {  useContext } from 'react'
import {MdHomeFilled} from "react-icons/md"
import {LuListTodo} from "react-icons/lu"
import {FcAbout} from "react-icons/fc"
import { NavLink } from 'react-router-dom'
import {IoPersonCircleOutline} from "react-icons/io5"
import { Context } from '../../context/Context'


function Navigation() {
  const {theme} = useContext(Context)
  return (
    <React.Fragment>
        <div className={` w-full bottom-0 fixed flex justify-evenly text-2xl py-2 ${theme} text-white`}>
          <NavLink to={"/"}>
            <MdHomeFilled/>
          </NavLink>
          <NavLink to={"/todos"}>
            <LuListTodo/>
          </NavLink>
          <NavLink to={"/about"}>
            <FcAbout/>
          </NavLink>
          <NavLink to={"/login"}>
            <IoPersonCircleOutline/>
          </NavLink>
        </div>
    </React.Fragment>
  )
}

export default Navigation