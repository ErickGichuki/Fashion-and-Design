import react from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Services from './pages/Services'
import Tasks from './pages/Tasks'
import Contact from './pages/Contact'
import BottomNav from './components/BottomNav'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/projects' element={<Tasks/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <BottomNav/>
    </>
  )
}

export default App
