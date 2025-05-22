import React, { use, useEffect, useState } from 'react'
import './LoadingScreen.css'
import { useNavigate } from 'react-router-dom'
import HomeScreen from './HomeScreen'
function LoadingScreen
() {
  let [gotoHome, setGotoHome] = useState(false)
  const nav=useNavigate( )
  useEffect(() => {
    const counter=setTimeout(() => {
      setGotoHome(true)
      nav('/home/home')
    },2000)
    return () => {
      clearTimeout(counter)
    }
  },[])
  return (
    <div className=' h-screen w-full flex items-center justify-center' style={{width: '100vw', height: '100vh' , padding:0, margin:0}}>
    {!gotoHome?<div className="loader "></div>:<HomeScreen/>}
    </div>
  )
}

export default LoadingScreen
