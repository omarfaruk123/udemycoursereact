import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/'  element={<App/>} >
        <Route path='' element={<Home/>} />
        <Route path='about' element={<About/>} />
         <Route path='service' element={<Service/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
