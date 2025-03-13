import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Country from './pages/Country'
import Contact, { contactdata } from './pages/Contact'
import Applayout from './components/Applayout'
import ErrorPage from './components/ErrorPage'
import './App.css'
import CountryDetails from './pages/CountryDetails'



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Applayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/about',
          element: <About/>
        },
        {
          path:'/Country',
          element: <Country/>
        },
        {
          path:'/Country/:id',
          element: <CountryDetails />
        },
        {
          path:'/contact',
          element: <Contact/>,
          action: contactdata,
        }
      ]}
  ])
  return <RouterProvider router={router}/>
}

export default App;