import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import TodoLayout from "./pages/layout/TodoLayout"
import TodoPage from "./pages/todopage/TodoPage"
import Home from "./pages/home/Home"
import SignUp from "./pages/authentication/signup/SignUp"
import Login from "./pages/authentication/login/Login"
import Settings from "./pages/settings/Settings"
import OtherComponents from './pages/extras/extraComponents/OtherComponents'
import AboutPage from './pages/about/AboutPage'
import AuthLayout from './pages/authentication/AuthLayout'
import Todo from './pages/todo/Todo'
import CreateTodo from './pages/createTodo/CreateTodo'
import CreateTodoLayout from './pages/createTodo/CreateTodoLayout'

function TodoApplication() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<TodoLayout/>}>
            <Route index path='/' element={<Home/>}/>
            <Route path='/todos' element={<TodoPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route  element={<AuthLayout/>}>
              <Route index path='login' element={<Login/>}/>
              <Route path='signup' element={<SignUp/>}/>
            </Route>
          </Route>
          <Route element={<CreateTodoLayout/>}>
            <Route path='create' element={<CreateTodo/>}/>
          </Route>
          <Route  element={<OtherComponents header={"Settings"}/>}>
            <Route index path='/settings' element={<Settings/>}/>
          </Route>
          <Route  element={<OtherComponents header={"My ToDo"}/>}>
            <Route index path='/:id' element={<Todo/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default TodoApplication