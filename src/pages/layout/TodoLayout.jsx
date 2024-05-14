import React from 'react'
import Header from "./header/Header";
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation';

function TodoLayout() {
  return (
    <React.Fragment>
        <div className=' md:flex-row-reverse md flex flex-col min-h-screen'>
          <div className=' md:w-[75%]'>
            <header>
              <Header/>
            </header>
            <main className=' flex-grow '>
              <Outlet/><br />
            </main>
          </div>
            <footer className='md:w-[25%] '>
              <Navigation/>
            </footer>
        </div>
    </React.Fragment>
  )
}

export default TodoLayout