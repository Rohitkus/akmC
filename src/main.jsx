import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter ,RouterProvider,Route,createRoutesFromElements} from 'react-router-dom'

import './index.css'
import Layout from './Layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Course from './pages/Course.jsx'
import Contact from './pages/Contact.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/course' element={<Course/>} />
      <Route path='/contact' element={<Contact/>} /> 




    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider  router={router}/>
  </React.StrictMode>,
)
