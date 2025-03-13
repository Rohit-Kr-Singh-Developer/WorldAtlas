import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import LoadingPage from '../components/LoadingPage'


function Applayout() {

  const Navigation = useNavigation()
  if(Navigation.state === 404) return <LoadingPage />

  
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Applayout