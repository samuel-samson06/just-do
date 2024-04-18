import React from 'react'
import { Outlet } from 'react-router-dom'

function CreateTodoLayout() {
  return (
    <React.Fragment>
      <div className=' flex flex-col min-h-screen'>
        
        <main className=' flex-grow'>
          <Outlet/>
        </main>
      
      </div>
    </React.Fragment>
  )
}

export default CreateTodoLayout
