import React from 'react'
import Header from "./header/Header";
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation';

function TodoLayout() {
  return (
    <React.Fragment>
        <div className=' flex flex-col min-h-screen'>
          <header>
            <Header/>
          </header>
          <main className=' flex-grow '>
            <Outlet/><br />
          </main>
          <footer>
            <Navigation/>
          </footer>
        </div>
    </React.Fragment>
  )
}

export default TodoLayout