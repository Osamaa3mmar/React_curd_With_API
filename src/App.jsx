import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Users from './Components/Users/Users'
import Edit from './Components/Edit/Edit'
import Add from './Components/Add/Add'
export default function App() {
  return (
    <div className="container">
    <Navbar/>
    <Routes>
      <Route  path='/' element={<Users/>}></Route>
      <Route  path='/edit/:id' element={<Edit/>}></Route>
      <Route  path='/add' element={<Add/>}></Route>

    </Routes>
    </div>
  )
}
