import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoadingScreen from './screens/LoadingScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutScreen from './screens/AboutScreen.jsx'
import WorkScreen from './screens/WorkScreen.jsx'
import ContactScreen from './screens/ContactScreen.jsx'
import Home from './screens/Home.jsx'
function App() {
  const router = createBrowserRouter([
    {path: "/",
    element: <LoadingScreen/>},
    {path: "/home",
      element: <HomeScreen/>,
    children: [
      {path:"home",element:<Home/>},
      {path: "about",element:<AboutScreen/>},
      {path: "contact",element:<ContactScreen/>},
      {path: "work",element:<WorkScreen/>},
    ]},
  ])

  return (<RouterProvider router={router} />
  )
}

export default App
