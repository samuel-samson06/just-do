import React from 'react'
import {IoPersonCircleOutline} from "react-icons/io5"
import {RiLockPasswordLine} from "react-icons/ri"
import {FcGoogle} from "react-icons/fc"
import {IoLogoApple} from "react-icons/io5"

function Login() {
  return (
    <React.Fragment>
        <form action="" className='  flex flex-col gap-5 px-5'>
          <label htmlFor="" className=' px-2  rounded-md gap-2 text-xl flex items-center bg-gray-200'>
            <IoPersonCircleOutline/>
            <input type="text" placeholder='username or email ' name="" className=" w-full my-1  text-base outline-none bg-gray-200" />
          </label>
          <label htmlFor="" className=' px-2  rounded-md gap-2 text-xl flex items-center bg-gray-200'>
            <RiLockPasswordLine/>
            <input type="password" placeholder='password' name="" className=" w-full  my-1  text-base outline-none bg-gray-200" />
          </label>
          <button type="submit" className=' rounded-md py-1 font-semibold bg-black text-white'>LOGIN</button>
          <div className=' grid grid-cols-3 font-semibold text-center'>
            <div className='  justify-center flex flex-col'>
              <p className=' h-0.5 rounded bg-black bg-opacity-75 text-transparent '>.</p>
            </div>
            <p>or</p>
            <div className=' justify-center flex flex-col'>
              <p className=' h-0.5 bg-black bg-opacity-75 text-transparent '>.</p>
            </div>
          </div>
        </form>
        <div className=' flex items-center justify-evenly py-5 text-3xl'>
          <FcGoogle className=' bg-gray-200 px-1 py-1 md:text-2xl md:px-0 md:py-0 rounded-full'/>
          <IoLogoApple className=' bg-gray-200 px-1 py-1 md:text-2xl md:px-0 md:py-0 rounded-full'/>
        </div>
    </React.Fragment>
  )
}

export default Login