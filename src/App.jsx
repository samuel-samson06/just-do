import React, { useState } from 'react'
import TodoApplication from './TodoApplication'
import { Context } from './context/Context'
import useLocalStorage from 'use-local-storage'

function App() {

  const [priority, setPriority] = useState('low')
  const [remainder,setRemainder]=useState(false)
  const [theme,setTheme] = useLocalStorage("theme","bg-green-400")
  const value ={priority,setPriority,remainder,setRemainder,theme,setTheme}
  return (
    <React.Fragment>
      <Context.Provider value={value}>
        <TodoApplication/>
      </Context.Provider>
    </React.Fragment>
  )
}

export default App