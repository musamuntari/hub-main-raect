import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import { About } from './pages/Doctors'
import { Contact } from './pages/Contact'


function App() {
  

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
