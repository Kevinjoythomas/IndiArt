import React from 'react'
import { Navbar } from './Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Layout from './Layout.jsx';
function Layout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default Layout