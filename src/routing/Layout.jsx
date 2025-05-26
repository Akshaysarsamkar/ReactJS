import React from 'react'
import Nacbar from './Nacbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Nacbar/>
      <Outlet/>
    </>
  )
}

export default Layout
