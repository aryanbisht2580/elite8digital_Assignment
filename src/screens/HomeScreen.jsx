import React from 'react'
import Navbar from '../Components/navbar.jsx'
import { Outlet } from 'react-router-dom'

function HomeScreen() {
  return (
    <div className='h-screen w-full ' style={{width: '100vw', height: '100vh' , padding:0, margin:0}}>
      <Navbar />
      <div className='w-full'>
        <Outlet />
      </div>
    </div>
  )
}

export default HomeScreen
